import * as aws from "@pulumi/aws";

// Define AWS region
const awsRegion = "ap-southeast-1";

// Create VPC
const vpc = new aws.ec2.Vpc("bingo-vpc", {
    cidrBlock: "10.0.0.0/16",
});

// Create Subnets inside the VPC
const subnet1 = new aws.ec2.Subnet("bingo-subnet-1", {
    vpcId: vpc.id,
    cidrBlock: "10.0.1.0/24",
    availabilityZone: `${awsRegion}a`,  // Change based on your AWS region
});

const subnet2 = new aws.ec2.Subnet("bingo-subnet-2", {
    vpcId: vpc.id,
    cidrBlock: "10.0.2.0/24",
    availabilityZone: `${awsRegion}b`,  // Change based on your AWS region
});

// Create a DB Subnet Group for RDS
const dbSubnetGroup = new aws.rds.SubnetGroup("bingo-db-subnet-group", {
    subnetIds: [subnet1.id, subnet2.id],
});

// Create MySQL RDS Instance
const db = new aws.rds.Instance("mysql-db", {
    instanceClass: "db.t3.micro",
    engine: "mysql",
    username: "admin",
    password: "SecurePass123!",
    allocatedStorage: 20,
    dbSubnetGroupName: dbSubnetGroup.name,
    vpcSecurityGroupIds: [vpc.defaultSecurityGroupId],
});

// Create EC2 Instance (Backend Server)
const backendInstance = new aws.ec2.Instance("backend-server", {
    ami: "ami-039454f12c36e7620", // Ensure this AMI is available in ap-southeast-1
    instanceType: "t3.medium",
    subnetId: subnet1.id, // Associate with the correct subnet
    vpcSecurityGroupIds: [vpc.defaultSecurityGroupId],
    userData: `#!/bin/bash
        sudo apt update -y
        sudo apt install -y nodejs npm docker.io docker-compose
        git clone https://github.com/user/backend.git /home/ubuntu/backend
        cd /home/ubuntu/backend && npm install && npm start`,
});

// Export outputs
export const backendIp = backendInstance.publicIp;
export const dbEndpoint = db.endpoint;
