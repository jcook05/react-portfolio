export default

{
reactsample:[

    {
         title: "React Class",
         code: `import React from 'react';
  
  
         class ExampleWorkModal extends React.Component {
         
             render ()  {
                 
                 let example = this.props.example;
                 let modalClass = this.props.open ? 'modal--open' : 'modal--closed'
         
                 return (
         
               <div className={"background--skyBlue " + modalClass}>
               <span className="color--cloud modal__closeButton" onClick={ (evt) => { this.props.closeModal(evt) } }>
                 <i className="fa fa-window-close-o"></i>
               </span>
               <img alt={ example.image.desc }
                    className="modal__image"
                    src={ example.image.src }/>
               <div className="color--cloud modal__text">
                 <h2 className="modal__title">
                   { example.title }
                 </h2>
                 <a className="color--skyBlue modal__link"
                    href={ example.href }>
                   Check it out
                 </a>
                 <br></br> <br></br>
                 <a className="color--skyBlue modal__link"
                    href={ example.github }>
                   Github Examples
                 </a>
                 <p  className="modal__description">
                    { example.desc }
                 </p>
               </div>
             </div>
                 )
             };
         
         };
         
         export default ExampleWorkModal;`
         
        },
   {
    title: "React Class 2",
    code: `  import React, { Component, useState } from 'react';
    import Form from 'react-bootstrap/Form';
    import Button from 'react-bootstrap/Button';
    import data from '../../data/data';
    import './HealthCheck.css';
    import { withRouter, Route } from 'react-router-dom';
    import Submitted from '../Submitted/Submitted';
    
    class HealthCheck extends Component {
       
        constructor(props) {
            super(props);
            this.handleInputChange = this.handleInputChange.bind(this);
            this.handleTextChange = this.handleTextChange.bind(this);
            this.handleFormSubmission = this.handleFormSubmission.bind(this);
            this.state = {
              temp: '',
              tempflag: false,
              co: false,
              sb: false,
              fat: false,
              mob: false,
              ha: false, 
              lot: false,
              st: false, 
              crn: false, 
              nov: false, 
              dia: false,
            }
          }
    
        flags = [];
    
    
        handleFormSubmission(event) {
    
            event.preventDefault();
            const form = event.currentTarget;
            console.log(form.checkValidity())
              if (form.checkValidity() === false) {
                console.log("Validity Check")
                event.stopPropagation();
                return
              }
             console.log("Form Valid, Submitting")
            this.props.onSubmit(this.state);
          }
        
        handleInputChange(event) {
            const { target: { name, value, type, checked } } = event
            this.setState({ error: "" });
            //console.log(name, checked)
            this.setState({ [name]: checked })
          }
    
        handleTextChange(event) {
            const { target: { name, value, type, checked } } = event
            //console.log(name, value)
            if(value >= 100) {
              this.setState({tempflag: true})
            }
            this.setState({ [name]: value })
          }
    
          
        render() { 
            return (
    
                <div>
                <Route
                      path='/submitted'
                      render={(props) => (
                        <Submitted {...props} flags={this.flags} results={this.state} />
                      )}
                />
    
                <Form onSubmit={this.handleFormSubmission} className='form-label'>
                    <Form.Group id="temp">
                    <Form.Label style={{ color: 'black' }}>Current Temperature</Form.Label>
                    <Form.Control
                    type="number"
                    step="0.01"
                    name="temp"
                    onChange={this.handleTextChange}
                    placeholder="Enter current temp"
                    required
                     />
                    </Form.Group>
                    
                    {data.questions.map((question) => (
                    <div key={question.id} className="mb-3">
                        <Form.Check type={'checkbox'} id={question.id}>
                        <Form.Check.Input 
                        type={'checkbox'}
                        name={question.name}
                        isValid name={question.name}
                        onChange={this.handleInputChange}
                        />
                        <Form.Check.Label style={{ color: 'black' }}>{\`\${question.question}?\`}</Form.Check.Label>
                        </Form.Check>
                    </div>
                    ))}
                   <Button variant="primary" type="submit">
                       Submit
                    </Button>
                </Form>
    
                </div>
    
            );
        }
    }
     
    export default withRouter(HealthCheck);`
    
   }
   
  ],
  
  cmsample:[
  
    {
         title: "Ansible System Task",
         code: `---
  
         # Create Jenkins group needed since not installing Jenkins 
         - name: Jenkins shell Group
           group: name=jenkins gid=4949 state=present
         
         # Create Jenkins User
         - name: Jenkins shell User
           user: name=jenkins comment="Jenkins Continuous Build server" home=/var/lib/jenkins shell=/bin/bash uid=2222 group=jenkins groups=jenkins state=present
            
         - name: Install Packages
           apt: name={{item}} state=latest
           ignore_errors: True
           with_items:
             - git
             - unzip
             - python-setuptools
             - python-dev
             - build-essential
             - python-pip
             - openssl
             - mini-httpd
             - nginx
             - memcached
             - lftp
             - asciidoc
             - ansible
             - docker.io
             - libunwind8
              
         - name: Install Additional Development tools. 
           apt: name={{item}} state=latest 
           ignore_errors: True
           with_items:
             - php
             - php-cli
             - php-mysql
             - php-pdo
             - php-gd
             - php-imap
             - php-mbstring
             - autoconf
             - automake
             - nodejs-legacy
             - npm
                
         - name: sudo yum remove java-1.7.0-openjdk
           apt: name={{item}} state=removed 
           with_items:
             - java-1.7.0-openjdk
         
         - name: ensure required packages are installed for Java 8
           apt: name={{item}} state=latest update_cache=yes
           with_items:
             - python-software-properties
         
         - name: Add Java repository to sources
           action: apt_repository repo='ppa:webupd8team/java'
         
         - name: Autoaccept license for Java
           action: shell echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | sudo /usr/bin/debconf-set-selections
         
         - name: Update APT package cache
           action: apt update_cache=yes
         
         - name: Install Java 8
           action: apt pkg=oracle-java8-installer state=latest install_recommends=yes
         
         - name: Set Java 8 Env
           action: apt pkg=oracle-java8-set-default state=latest install_recommends=yes
             
         - name:  Install boto3
           command: pip install boto3
         
         - name:  Install cli53
           command: pip install cli53
         
         - name: Start Docker
           service: name=docker state=started
         
         - name: Add Docker to jenkins group
           command: usermod -aG docker jenkins
         
         - name:  Update pip
           command:  pip install --upgrade pip
           
         - name: Create Jenkins Temp Dir
           file: dest=/tmp/jenkins state=directory mode=0755 owner=root group=root
         
         - name: Create Jenkins .kube Dir for Kubernetes config
           file: dest=/var/lib/jenkins/.kube state=directory mode=0755 owner=jenkins group=jenkins
         
         - name: Get Jenkins Key
           get_url: url=https://pkg.jenkins.io/debian-stable/jenkins.io.key dest=/tmp/jenkins.io.key owner=root group=root mode=0644
         
         - apt_key:
             file: /tmp/jenkins.io.key
             state: present
         `
        },
   {
    title: "Docker - Jira ",
    code: `  FROM openjdk:8
  
    # Configuration variables.
    ENV JIRA_HOME     /var/atlassian/jira
    ENV JIRA_INSTALL  /opt/atlassian/jira
    ENV JIRA_VERSION  7.4.1
    
    # Install Atlassian JIRA and helper tools and setup initial home
    # directory structure.
    RUN set -x \\
        && echo "deb http://ftp.debian.org/debian jessie-backports main" > /etc/apt/sources.list.d/jessie-backports.list \\
        && apt-get update --quiet \\
        && apt-get install --quiet --yes --no-install-recommends xmlstarlet \\
        && apt-get install --quiet --yes --no-install-recommends -t jessie-backports libtcnative-1 \\
        && apt-get clean \\
        && mkdir -p                "\${JIRA_HOME}" \\
        && mkdir -p                "\${JIRA_HOME}/caches/indexes" \\
        && chmod -R 700            "\${JIRA_HOME}" \\
        && chown -R daemon:daemon  "\${JIRA_HOME}" \\
        && mkdir -p                "\${JIRA_INSTALL}/conf/Catalina" \\
        && curl -Ls                "https://www.atlassian.com/software/jira/downloads/binary/atlassian-jira-core-\${JIRA_VERSION}.tar.gz" | \\
        tar -xz --directory "\${JIRA_INSTALL}" --strip-components=1 --no-same-owner \\
        && curl -Ls                "https://dev.mysql.com/get/Downloads/Connector-J/mysql-connector-java-5.1.38.tar.gz" | tar -xz --directory \\
        "\${JIRA_INSTALL}/lib" --strip-components=1 --no-same-owner "mysql-connector-java-5.1.38/mysql-connector-java-5.1.38-bin.jar" \\
        && rm -f                   "\${JIRA_INSTALL}/lib/postgresql-9.1-903.jdbc4-atlassian-hosted.jar" \\
        && curl -Ls                "https://jdbc.postgresql.org/download/postgresql-9.4.1212.jar" -o "\${JIRA_INSTALL}/lib/postgresql-9.4.1212.jar" \\
        && chmod -R 700            "\${JIRA_INSTALL}/conf" \\
        && chmod -R 700            "\${JIRA_INSTALL}/logs" \\
        && chmod -R 700            "\${JIRA_INSTALL}/temp" \\
        && chmod -R 700            "\${JIRA_INSTALL}/work" \\
        && chown -R daemon:daemon  "\${JIRA_INSTALL}/conf" \\
        && chown -R daemon:daemon  "\${JIRA_INSTALL}/logs" \\
        && chown -R daemon:daemon  "\${JIRA_INSTALL}/temp" \\
        && chown -R daemon:daemon  "\${JIRA_INSTALL}/work" \\
        && sed --in-place          "s/java version/openjdk version/g" "\${JIRA_INSTALL}/bin/check-java.sh" \\
        && echo -e                 "\njira.home=$JIRA_HOME" >> "\${JIRA_INSTALL}/atlassian-jira/WEB-INF/classes/jira-application.properties" \\
        && touch -d "@0"           "\${JIRA_INSTALL}/conf/server.xml"
    #COPY ./JiraHome/jira /opt/atlassian/jira
    
    # Use the default unprivileged account. This could be considered bad practice
    # on systems where multiple processes end up being executed by 'daemon' but
    # here we only ever run one process anyway.
    USER daemon:daemon
    
    # Expose default HTTP connector port.
    EXPOSE 8080
    
    # Set volume mount points for installation and home directory. Changes to the
    # home directory needs to be persisted as well as parts of the installation
    # directory due to eg. logs.
    VOLUME ["/var/atlassian/jira", "/opt/atlassian/jira/logs"]
    
    # Set the default working directory as the installation directory.
    WORKDIR /var/atlassian/jira
    
    #COPY "docker-entrypoint.sh" "/"
    #ENTRYPOINT ["/docker-entrypoint.sh"]
    
    # Run Atlassian JIRA as a foreground process by default.
    CMD ["/opt/atlassian/jira/bin/catalina.sh", "run"]
    
    ## To Run
    #docker run --detach --publish 8080:8080 -v ./JiraHome:/var/atlassian/jira jira:latest`
   }
   
  ],
  
  
  cicdsample: [
  
    {
         title: "DSL Jobs Plugin",
         code: `// Will generate a job based on DevTemplate for each item in the apps array
         def apps = [  "WeatherService": 
                     [ "repos": ["git@bitbucket.org:managedcicd/weathermsbuild.git", '$BRANCH'],
                      "name":"WeatherService",
                      "description":"prototype dotnet service",
                      "authtoken":"buildit",
                      "imagename":"weather",
                      "deploymentname":"weather",
                      "baseimagepath":"managedcicd/dotnetservice"
                    ],
                     "fromscratch":
                     // Illustrates the proper syntax for a GitLabs project.
                       [ "repos": ["ssh://git@code.managedcicd.com:7999/GitLabsStandard/gitlabsproject.git", '$BRANCH'],
                       "name":"fromscratch",
                       "description":"test service desc",
                       "authtoken":"buildit",
                       "imagename":"fromscratch",
                    ],
                     "StandardService":
                       [ "repos": ["git@bitbucket.org:managedcicd/standardservice.git", '$BRANCH'],
                       "name":"StandardService",
                       "description":"Standard Lightweight Microservice",
                       "authtoken":"buildit",
                       "imagename":"standardservice",
                       "deploymentname":"standardservice", 
                       "baseimagepath":"managedcicd/standardservice"
                    ]
                    ]
         apps.values().each { app ->
         
         // Loop through apps array
             def jobprefix
             def jobname
             //if ("\${JobTemplate}" == "DevTemplate")
             //{
                jobprefix = "Development" 
             //} else
             //{  
             //  jobprefix = "Release"
               
             //}
           
           /* Conditionally generate Job Name based on Selected Template */
             
           jobname = jobprefix + app.name
           job(jobname){
                using 'DevTemplate'
           
           }
          description(app.description)
          logRotator(10, -1, 1, -1)
           scm {
             git(app.repos.get(0),app.repos.get(1))
           }
        
             // Configure Slack  
             
            // configure {
            //         it / 'publishers' / 'jenkins.plugins.slack.SlackNotifier'(plugin: "slack@2.0.1") {
            //             teamDomain('myteam')
            //             authToken('mytoken')
            //             buildServerUrl('http://mydomain:8080/')
            //             room('#my-room')
            //             notifyUnstable(true)
            //             notifyFailure(true)
            //             notifyBackToNormal(true)
            //             includeTestSummary(true)
            //             commitInfoChoice('AUTHORS_AND_TITLES')
            //         }
            //     }
          configure { node ->  
             node / 'scm' / 'extensions' << 'hudson.plugins.git.extensions.impl.UserExclusion' {
               excludedUsers 'Jenkins User'
             }
           }
          authenticationToken(app.authtoken)
          configure { project ->  
             project / 'triggers' << 'hudson.triggers.SCMTrigger' {
               spec ('H/5 * * * *')
               ignorePostCommitHooks 'false' 
             }
           }
         
           parameters {
             stringParam("imagename",app.imagename,"Kubernetes image name")
             stringParam("deploymentname",app.deploymentname,"Kuberetes deploy name")
             stringParam("baseimagepath",app.baseimagepath,"Base path of image, for example managedcicd/dotnetservice for DockerHub repository or server/group/service for GitLabs")    
           }
           steps {
                 shell(readFileFromWorkspace('buildscripts/dotnetbuild'))
                 shell(readFileFromWorkspace('buildscripts/dockerbuildpush'))   
           }
           }
         }`
         
        },
   {
    title: "Serverless Lambda Deploy",
    code: `  import boto3
    import os
    from botocore.client import Config
    import zipfile
    import StringIO
    import mimetypes
    
    def lambda_handler(event, context):
        sns = boto3.resource('sns')
        topic = sns.Topic(os.environ['SNS_TOPIC'])
        try:
            s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))
            build_bucket = s3.Bucket(os.environ['BUILD_BUCKET'])
            portfolio_bucket = s3.Bucket(os.environ['PORTFOLIO_BUCKET'])
            ## Can use the /tmp folder when running Lambda functions
            portfolio_zip = StringIO.StringIO()
            build_bucket.download_fileobj('jbcportfolio.zip', portfolio_zip)
            with zipfile.ZipFile(portfolio_zip) as myzip:
                for nm in myzip.namelist():
                    obj = myzip.open(nm)
                    print(obj)
                    portfolio_bucket.upload_fileobj(obj, nm, ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                    portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
        
            topic.publish(Subject="Portfolio Deployed", Message="Deployment successful via Lambda.")
        except: 
            topic.publish(Subject="Portfolio Deploy Failed", Message="Deployment failed.")
            raise
        return 'Hello from Lambda'`
    
   }
   
  ],
  
  pythonsample: [
  
    {
         title: "Python AWS Cognito Library",
         code: ` import boto3
         import botocore
         import hmac
         import hashlib
         import base64
         
         from botocore.exceptions import ClientError
         
         class AwsCogUtilities:
              
             def basictest(self, m):
                 m = "new message"
                 return m
             """Method to create a Cognito Identity Pool"""
             def createIpoolnoauth(self, poolname, region):
                 ## Setup boto3 client with route53
                 
                 client = boto3.client('cognito-identity', region_name=region)
                 response = client.create_identity_pool(
                     IdentityPoolName=poolname,
                     AllowUnauthenticatedIdentities=True
                    
                 )
                 
             """Method to create a Test Cognito Identity Pool.   This pool is for testing only and is setup with minimal security"""
             def createtestUpool(self, poolname, region):
                 ## Setup boto3 client with route53
                 
                 client = boto3.client('cognito-idp', region_name=region)
                 response = client.create_user_pool(
                     PoolName=poolname,
                     Policies={
                         'PasswordPolicy': {
                         'MinimumLength': 8,
                         'RequireUppercase': False,
                         'RequireLowercase': False,
                         'RequireNumbers': False,
                         'RequireSymbols': False
                     }
                 },
                         
                 AliasAttributes=[
                     'preferred_username',
                 ],
         
                 Schema=[
                 {
                     'Name': 'email',
                     'AttributeDataType': 'String',
                     'DeveloperOnlyAttribute': False,
                     'Mutable': True,
                     'Required': True
                    
                 },
         
                 {
                     'Name': 'name',
                     'AttributeDataType': 'String',
                     'DeveloperOnlyAttribute': False,
                     'Mutable': True,
                     'Required': True
                    
                 }
         
                 ],
                 
                 UserPoolTags={
                 'Test': 'Test'
                 }
         
                 )
         
         
             def get_secret_hash(self, username, cid, secret):
                 # A keyed-hash message authentication code (HMAC) calculated using
                 # the secret key of a user pool client and username plus the client
                 # ID in the message.
                 message = username + cid
                 dig = hmac.new(secret, msg=message.encode('UTF-8'),
                                digestmod=hashlib.sha256).digest()
                 
                 return base64.b64encode(dig).decode()
                 
         
             """Method to auth user"""
             def cogauth(self, region, cid):
         
                 secret = '2ik61o00ej778b0o1tqlo5ba8g5c5ijieqs53c2etv2k59ai0um'
                 client = boto3.client('cognito-idp', region_name=region)
                 response = client.initiate_auth(
                 
                 ClientId='58d8h0qc624v9dnfa47njki73n',
                 ## Allowed Auth Flows:  'USER_SRP_AUTH'|'REFRESH_TOKEN_AUTH'|'REFRESH_TOKEN'
                 |'CUSTOM_AUTH'|'ADMIN_NO_SRP_AUTH'|'USER_PASSWORD_AUTH',
                 AuthFlow='USER_PASSWORD_AUTH',
                 AuthParameters={
                    'USERNAME': 'jcook05',
                    'PASSWORD': 'testing102',
                    'SECRET_HASH': self.get_secret_hash('jcook05', cid, secret)
                 }
                 )
         
                 return response
         
             def cogAdminAuth (self, region, cid, username, password):
         
                 secret = '2ik61o00ej778b0o1tqlo5ba8g5c5ijieqs53c2etv2k59ai0um'
         
                 client = boto3.client('cognito-idp', region_name=region)
                 response = client.admin_initiate_auth(
               
                 UserPoolId='us-west-2_zsyyFM2kV',
                 ClientId='58d8h0qc624v9dnfa47njki73n',
                 
                 # Allowed Auth Flows 'USER_SRP_AUTH'|'REFRESH_TOKEN_AUTH'|'REFRESH_TOKEN'|
                 'CUSTOM_AUTH'|'ADMIN_NO_SRP_AUTH'|'USER_PASSWORD_AUTH',
                 AuthFlow='ADMIN_NO_SRP_AUTH',
                 AuthParameters={
                 'USERNAME': username,
                 'PASSWORD': password,
                 'SECRET_HASH': self.get_secret_hash(username, cid, secret)
                  }
                 )     
                 return response
         
         
             def respondAuthChallenge(self, region, username, newpw, session, cid, secret):
         
                 client = boto3.client('cognito-idp', region_name=region)
         
                 response = client.admin_respond_to_auth_challenge(
                     UserPoolId='us-west-2_zsyyFM2kV',
                     ClientId='58d8h0qc624v9dnfa47njki73n',
                     # Allowd Challenge Names 'SMS_MFA'|'SOFTWARE_TOKEN_MFA'|
                     'SELECT_MFA_TYPE'|'MFA_SETUP'|'PASSWORD_VERIFIER'|'CUSTOM_CHALLENGE'
                     |'DEVICE_SRP_AUTH'|'DEVICE_PASSWORD_VERIFIER'|'ADMIN_NO_SRP_AUTH'|'NEW_PASSWORD_REQUIRED',
                     ChallengeName='NEW_PASSWORD_REQUIRED',
                     ChallengeResponses= {
                         'USERNAME': username,
                         'NEW_PASSWORD': newpw,
                         'SECRET_HASH': self.get_secret_hash(username, cid, secret)
                      
                     },
                     Session=session
                 )
         
                 return response
         
             def resetPassWord(self, region, token, oldpw, newpw ):
                
                 client = boto3.client('cognito-idp', region_name=region)
         
                 response = client.change_password(
                 PreviousPassword=oldpw,
                 ProposedPassword=newpw,
                 AccessToken=token
                 )
         
                 return response
           
             """Method to get all Cognito Pools by region"""
             def getcogpoolsbyregion(self, region):
                 
                  client = boto3.client('cognito-idp', region_name=region)
                  response = client.list_user_pools()
         
                  return response
                  
             """Method to get all Cognito Pools by profile"""
             def getcogpoolsbyprofile(self, profile, maxresults):
                 
                  session = boto3.Session(profile_name=profile)
                  cog = session.client('cognito-idp')
                 
                  response = cog.list_user_pools(
         
                       MaxResults=maxresults
         
                  )
         
                  return response
         
            
     `
         
        },
   {
    title: "Python AWS S3 Library",
    code: `  from fabric.api import run,env, put, get, local, settings
    from os import path
    import time
    from fabric.colors import green as _green, yellow as _yellow
    import boto
    import boto.ec2
    import boto.ec2.autoscale
    import boto3
    from pprint import pprint
    from botocore.exceptions import ClientError
    from mimetypes import MimeTypes
    
    
    class AwsS3Utilities:
        
        """Method to upload file to an S3 bucket"""
        def uploadfile(self, filepath, filename, bucket):
            ## Setup boto3 client with route53
            
            s3 = boto3.resource('s3')
            bucket = s3.Bucket(bucket)
            bucket.upload_file(filepath, filename)
    
        """Method to set existing object ACL to public-read"""
        def setACLread(self, bucket, key):
            s3 = boto3.resource('s3')
             
            s3.ObjectAcl(bucket, key).put(ACL='public-read')
    
        """Method to put an object with a public read ACL."""
        def put_pub_object(self, filepath, filename, bucket):
    
            s3 = boto3.resource('s3')
            print ("Uploading file " + filepath + ' to ' + filename)
            try:                 
                data = open(filepath, 'rb')
                ftype, encoding = MimeTypes().guess_type(filepath)
                conType = ftype if ftype is not None else encoding if encoding is not None else 'text/plain'    
                s3.Object(bucket, filename).put(Body=data,ContentType=conType,ACL='public-read')
            except ClientError as err:
                print("Failed to upload artefact to S3.\n" + str(err))
                return False
            except IOError as err:
                print("Failed to access artefact in this directory.\n" + str(err))
                return False   
            return True
    
        """Method to put an object with a private read ACL."""
        def put_private_object(self, filepath, filename, bucket):
    
            s3 = boto3.resource('s3')
            print ("Uploading file " + filepath + ' to ' + filename)
            try:                 
                data = open(filepath, 'rb')
                ftype, encoding = MimeTypes().guess_type(filepath)
                conType = ftype if ftype is not None else encoding if encoding is not None else 'text/plain'    
                s3.Object(bucket, filename).put(Body=data,ContentType=conType,ACL='private')
            except ClientError as err:
                print("Failed to upload artefact to S3.\n" + str(err))
                return False
            except IOError as err:
                print("Failed to access artefact in this directory.\n" + str(err))
                return False   
            return True
    
        """Method to put an object with a public read ACL."""
        def get_object(self, targetdir, filename, bucket):
    
            s3 = boto3.resource('s3')
            print ("Downloading file " + filename + ' to ' + targetdir)
            try:                 
               
                newfile = targetdir + filename
                s3.Bucket('mybucket').download_file(filename, newfile)    
                ##s3.Object(bucket, filename).get()
            except ClientError as err:
                print("Failed to download artifact from S3.\n" + str(err))
                return False
            
            return True`
    
   }
   
  ],
  
  slssample: [
  
    {
         title: "NodeJS Serverless",
         code: `'use strict'
         const querystring = require('querystring')
         function generator(min, max) {
           // return whole number Math.floor rounds
           return Math.floor(Math.random() * (max - min) + min);
         }
         function RandomWeather(lat, long, days) {
           // Conditions Array
           var conditions = ["Sunny","Mostly Sunny","Partly Sunny","Partly Cloudy","Mostly Cloudy","Rain"];
           // Forecast Array
           var forecast = new Array()
           console.log("Modal to review questions and edit or submit")
           console.log(lat)
           console.log(long)
           var obj = new Object();
           var test = generator(0, (conditions.length - 1))
           console.log(test)
         
           for (var i = 1; i < days; i++) {
         
             obj.HiTemperature = generator(40, 100);
             obj.LoTemperature = generator(0, obj.HiTemperature);
             obj.AverageWindSpeed = generator(0, 45);
             obj.Conditions = conditions[generator(0, (conditions.length - 1))];
           var jsonString = JSON.stringify(obj);    
         
           forecast.push(obj)
           }
           
           console.log(forecast.length)
           console.log(forecast[0].HiTemperature)
           console.log(forecast[0].LoTemperature)
           console.log(forecast[0].AverageWindSpeed)
           console.log(forecast[0].Conditions)
           console.log(jsonString)
           var newstring = JSON.stringify(forecast)
           console.log(newstring)
           return forecast;
         }
         var NewWeather = RandomWeather(35.5, 40.75, 6)
         module.exports.weather = (event, context, callback) => {
         
           var latitude = querystring.parse(event.body).lat
           var longitude = querystring.parse(event.body).long
           var WeatherReport = RandomWeather(latitude, longitude, 6)
           var jsonString = JSON.stringify(WeatherReport, null, 4);   
           const response = {
             statusCode: 200,
             body: jsonString,
           };
         
           callback(null, response);
         
           // Use this code if you don't use the http event with the LAMBDA-PROXY integration
           // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
         };
  `       
    }, 
    {
      title: "NodeJS Serverless yml",
      code:`service: nodejsweather # NOTE: update this with your service name
          
      provider:
        name: aws
        region: us-west-2
        runtime: nodejs6.10 
      functions:
        weather:
          handler: handler.weather
      
      #Setting up the APIGateWay end point
          events:
            - http:
                path: /
                method: get
  `    
  
    }
    
  
  ],
  edssample: [ 
  
    {
      title: "SG Event Driven Security",
      code:`import os
      import os.path
      import sys
      import json
      import boto3
      import botocore
      
      client = boto3.client('ec2')
      ssh = []
      tcp = []
      udp = []
      
      def getSg(group_id):
          response = client.describe_security_groups(
          Filters=[
              {
                  'Name': 'group-id',
                  'Values': [
                      group_id,
                  ]
              },
          ],
          DryRun=False,
          MaxResults=123
          )
          return response
      
      def revokeIngressCidr(sg_id, ip_permissions):
          response = client.revoke_security_group_ingress(
          GroupId=sg_id,
          IpPermissions=ip_permissions
          )
          return response    
      
      def revokeIngress(sg_id):
          if os.environ['ssh'] == "true":
              print("ssh is true " + "removing " +  str(len(ssh)) + " ingress rules")
              if len(ssh) > 0:
                  print(revokeIngressCidr(sg_id, ssh))
          if os.environ['tcp'] == "true":
              print("tcp is true " + "removing " +  str(len(tcp)) + " ingress rules")
              if len(tcp) > 0:
                  print(revokeIngressCidr(sg_id, tcp))
          if os.environ['udp'] == "true":
              print("udp is true " + "removing " +  str(len(tcp)) + " ingress rules")
              if len(udp) > 0:
                  print(revokeIngressCidr(sg_id, udp))
          
      def sg_security(event, context):
          sg_id = event["detail"]["requestParameters"]["groupId"]
          group_name = getSg(event["detail"]["requestParameters"]["groupId"])["SecurityGroups"][0]["GroupName"]
          print(group_name)
          ip_permissions = getSg(event["detail"]["requestParameters"]["groupId"])["SecurityGroups"][0]["IpPermissions"]
      
      ## May want to dynamically generate these.   Future iteration may remove all authorizations excluding specified cidrs
          removeCidr = [{'CidrIp': '0.0.0.0/0'}]
          removeCidrIpv6 = [{'CidrIpv6': '::/0'}]
          ## Setup IP Permissions
          for x in ip_permissions:
              print(x)
              for v in x["IpRanges"]:
                  if v["CidrIp"] == "0.0.0.0/0":
                      x["IpRanges"] = removeCidr
                      for v in x["Ipv6Ranges"]:
                          if["CidrIpv6"] == "::/0":
                              x["Ipv6Ranges"] = removeCidrIpv6
                      print("Open Port Found")
                      if x["FromPort"] == 22 and x["ToPort"] == 22:
                          ssh.append(x)
                      elif x["FromPort"] != 22 and x["IpProtocol"] == "tcp":
                          tcp.append(x)
                      elif x["IpProtocol"] == "udp":
                          udp.append(x)
      
          revokeIngress(sg_id)`
    }
    ],
    terraformsample: [ 
  
      {
        title: "Terraform Code Build",
        code:`

        ################################################################################################################
        ## Provider
        ################################################################################################################
        
        # Specify the provider and access details
        provider "aws" {
          region = var.aws_region
          profile = "default"
          
        }
        
        
        ################################################################################################################
        ## Backend - Remote State
        ################################################################################################################
        
        /* 
        terraform {
          backend "s3" {
            bucket = "your-terraform-state-bucket"
            region = "us-west-2"
            profile = "your-profile"
            key = "spa/codebuild/terraform.tfstate"
            
          }
        }
          */
        
        resource "aws_codebuild_project" "example" {
          name          = var.codebuild_project
          description   = "Serverless Portfolio Build"
          build_timeout = "5"
          service_role  = var.codebuild_role_arn
        
          artifacts {
            type = "S3"
            name = var.artifact-name
            location = var.s3_bucket
            packaging = "ZIP"
          }
        
          environment {
            compute_type                = "BUILD_GENERAL1_SMALL"
            image                       = "aws/codebuild/standard:1.0"
            type                        = "LINUX_CONTAINER"
            image_pull_credentials_type = "CODEBUILD"
        
          }
        
          source {
            type            = "GITHUB"
            location        = var.github_repo
            git_clone_depth = 1
        
            auth {
              type     = "OAUTH"
            }
          }
        
          tags = {
            "Environment" = "Test",
            "Name" = "Serverless Portfolio"
          }
        }
        
        # aws_codebuild_webhook._
        resource "aws_codebuild_webhook" "example" {
          project_name = aws_codebuild_project.example.name
        }`
      },
      {

        title: "Terraform Static Site",
        code: `
        ################################################################################################################
        ## Provider
        ################################################################################################################

          # Specify the provider and access details
          provider "aws" {
            region = var.aws_region
            profile = "your-aws-profile"
          }

        ################################################################################################################
        ## Backend - Remote State
        ################################################################################################################


            /* terraform {
              backend "s3" {
                bucket = var.backend-bucket
                
                ## Add the key via terraform init
                ## terraform init -backend-config="key=/your/backend"
                #key    = var.statepatj
                ## terraform init -backend-config="region=us-west-2"
                #region = var.aws_region
              }
            }
            */


        ################################################################################################################
        ## Static Site S3 Dev Bucket
        ################################################################################################################

        module "dev_static_s3"  {
          source = "../modules/s3_static"
          bucket_name = var.s3_data[0].name
          policy = file("\${path.root}\${var.s3_data[0].policy}")
          
        }

        ################################################################################################################
        ## Static Site S3 Prod Bucket
        ################################################################################################################

        module "prod_static_s3"  {
          source = "../modules/s3_static"
          bucket_name = var.s3_data[1].name
          policy = file("\${path.root}\${var.s3_data[1].policy}")
          
        }

        ################################################################################################################
        ## Route53 Record Sets
        ################################################################################################################

        module "dev_alias_rs"  {
          source = "../modules/alias_record_set"
          zone_id = var.zone_id
          name = var.s3_data[0].name
          alias_name =  "s3-website-var.aws_region.amazonaws.com"
          hosted_zone_id = "\${module.dev_static_s3.hosted_zone_id}"
          evaluate_target_health = false
        }
        module "prod_alias_rs"  {
          source = "../modules/alias_record_set"
          zone_id = var.zone_id
          name = var.s3_data[1].name
          alias_name = "s3-website-var.aws_region.amazonaws.com"
          hosted_zone_id = "\${module.prod_static_s3.hosted_zone_id}"
          evaluate_target_health = false
          
          
        } `
      }
      ],
      cfsample: [

          {
            title: "AWS Workspaces",
            code: `

            AWSTemplateFormatVersion: "2010-09-09"
            Description: WorkSpaces infrastructure

            Parameters:

              BundleId:
                Type: String
                Default: wsb-h9ntd828v
                Description:  Workspace Bundle to use.  Default is the Linux Amazon 2 Standard bundle

              RunningMode:
                Type: String
                Default: ALWAYS_ON
                Description:  ALWAYS_ON | AUTO_STOP

              ComputeType:
                Type: String
                Default: PERFORMANCE
                Description: VALUE|STANDARD|PERFORMANCE|POWER|GRAPHICS|POWERPRO|GRAPHICSPRO
            Resources:
              workspace1:
                Type: AWS::WorkSpaces::Workspace
                Properties:
                  BundleId: !Ref BundleId
                  DirectoryId: !ImportValue DirectoryId
                  UserName: mdevavarapu
                  WorkspaceProperties:
                  ## ComputeTypeName appears to be required. 
                    ComputeTypeName: !Ref ComputeType
                    RootVolumeSizeGib: 80
                    RunningMode: !Ref RunningMode
                    # RunningModeAutoStopTimeoutInMinutes: 60
                    UserVolumeSizeGib: 50
                  Tags:
                    -
                      Key: Name
                      Value: Linux-Performance-Custom-Bundle     
              workspace2:
                Type: AWS::WorkSpaces::Workspace
                Properties:
                  BundleId: !Ref BundleId
                  DirectoryId: !ImportValue DirectoryId
                  UserName: vkrishna
                  WorkspaceProperties:
                  ## ComputeTypeName appears to be required. 
                    ComputeTypeName: !Ref ComputeType
                    RootVolumeSizeGib: 80
                    RunningMode: !Ref RunningMode
                    # RunningModeAutoStopTimeoutInMinutes: 60
                    UserVolumeSizeGib: 50
                  Tags:
                    -
                      Key: Name
                      Value: Linux-Performance-Custom-Bundle
            `
          }
      ]





      
     

    }
  