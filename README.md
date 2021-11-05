# Recruitment task

## Introduction:

1. Recruitment consists of 2 mandatory and 2 optional tasks.
2. Prepared code as a starting point for recruitment task can be found at https://gitlab.com/pawelkaczoruk/freelanceinfluence-task
3. Your task submission must be pushed to a repository manager like Github or Gitlab and link shared with us. Screenshot or video presentation of working code will not be accepted.
4. API documentation is present on swagger: https://003.freelanceinfluence.xyz/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config#/
5. The main focus is code quality, eslint and prettier are both set up, take advantage of that.
6. Tech stack that can be used to solve this task: TypeScript, Vue 3 (use Composition API only, don't use Options API), SCSS, Axios, Vue Router. Other plugins, UI libraries, etc. shouldn't be used.
7. The app was created with node 14.15, if you have problems running it then your node version might be the issue.
8. If you have any issues and questions then ask them on recruitment channel and not on PM.

Account creditentials for your test:

```
email: xwqwqnkbzfckwzrfrr@sdvft.com
password: passpass
```

## Mandatory tasks:

### 1. Fetch and display user profile info:

Login endpoint returns user data and it is displayed in dashboard. If you refresh the app you are still logged in but user profile data is no longer there. In this subtask you have to use proper endpoint from api to fetch user data and save it in store.
https://003.freelanceinfluence.xyz/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config#/user-management-controller/getMyProfile

### 2. Implement create task feature

In this subtask you have to implement create task feature. Endpoint, schema and response can be found on swagger:
https://003.freelanceinfluence.xyz/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config#/task-controller/addTask
Leave `filesIds` field empty array when making request, you don't have to implement this feature. The currency should always be `USD`. All of platforms should be selected by default, user should be able to unselect them.

Create simple form validation on form submit according to schema for this endpoint on Swagger.

After successfull task creation, user should be redirected to dashboard and his newly created task (from addTask endpoint response) should be saved to store and displayed under user profile info.

## Extra (optional) subtasks:

### 3. Fetch and display last 5 user tasks

If user is logged in then you should once fetch last of 5 his tasks using endpoint:
https://003.freelanceinfluence.xyz/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config#/task-controller/getMyTasks

Just use `limit` param for this call, other params are used for pagination and you don't have to implement this feature.

Fetched data should be saved to store (same store as from create task response), and task list should be displayed in dashboard under user profile info. When you create a new task it should be added to the top of the list.

### 4. Make everything look nicer

Style up profile info in dashboard, display only first and last name for both marketer and influencer state. Style up task creation form. Style up Tasks list in dashboard: display task title, description, budget, proposalCount, platforms and addedTime.
NOTE: it doesn't have to be fancy styled, make it look a bit nicer than plain objects, simple styles will be enough. Doesn't have to be responsive, just make it look good on desktops.
