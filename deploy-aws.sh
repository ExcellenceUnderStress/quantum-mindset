#!/bin/bash

# Quantum Mindset - AWS Deployment Script
# This script helps deploy the Next.js app to AWS Amplify

echo "🚀 Quantum Mindset - AWS Deployment Setup"
echo "=========================================="

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "❌ AWS CLI is not installed. Please install it first:"
    echo "   https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"
    exit 1
fi

# Check if user is logged in to AWS
if ! aws sts get-caller-identity &> /dev/null; then
    echo "❌ AWS CLI is not configured. Please run 'aws configure' first."
    exit 1
fi

echo "✅ AWS CLI is configured"

# Build the project
echo "📦 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
    exit 1
fi

echo ""
echo "🌐 AWS Amplify Deployment Options:"
echo "1. Manual Deployment via AWS Console:"
echo "   - Go to: https://console.aws.amazon.com/amplify/"
echo "   - Click 'New app' → 'Host web app'"
echo "   - Connect GitHub repository: ExcellenceUnderStress/quantum-mindset"
echo "   - AWS will use the amplify.yml configuration automatically"
echo ""
echo "2. CLI Deployment (if Amplify CLI is installed):"
echo "   - Run: amplify init"
echo "   - Run: amplify add hosting"
echo "   - Run: amplify publish"
echo ""
echo "📋 Repository URL: https://github.com/ExcellenceUnderStress/quantum-mindset"
echo "📄 Build config: amplify.yml (already configured)"
echo ""
echo "✨ Your Quantum Mindset app is ready for AWS deployment!"
