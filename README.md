# instructions to run the application

1. clone the project 

e.g git clone https://github.com/pawanjangid24/resourcemanagement.git

2. install all the depenendencies

npm install

3. start the application using

npm run start

4. create resource using following steps

POST URL: <baseURL>/resource

payload: 
{
    "name":<resurce_name>,
    "skill": <skill>,
    "availability":<availability_date>
}

5. create project using

POST URL: <baseURL>/project

payload:
{
    "project": <project_name>,
    "tasks": [{
        "task":<task_name>,
        "skill":<skill_required>,
        "startDate":<project_start_date>
    }]
}

6. get the project information

GET URL: <base_url>/projects

7. get the resource information

GET URL: <base_url>/resources?skill=<skill_name>&availabilty=<availabilty_date>

8. upload file

POST URL: <base_url>/uploadFile

Body: <form-data>

sampleFile <file>

9. get files uploaded

GET URL: <base_url>/files/<file_name>

