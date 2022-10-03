const displayInitializer = (() => {
    const initializeHeader = (header) => {
        const logo = document.createElement('h1');
        logo.classList.add('logo');
        logo.textContent = "Tasks";
        header.appendChild(logo);
    };

    const initializeMain = (main) => {
        const sidebar = document.createElement('div');
        const content = document.createElement('div');
        sidebar.classList.add('sidebar');
        content.classList.add('content');
        
        initializeSidebar(sidebar);
        main.appendChild(sidebar);

        initializeContent(content);
        main.appendChild(content);
    };

    const initializeSidebar = (sidebar) => {
        const folders = document.createElement('div');
        const projects = document.createElement('div');
        folders.classList.add('folders');
        projects.classList.add('projects');

        initializeFolders(folders);
        sidebar.appendChild(folders);
        
        initializeprojects(projects);
        sidebar.appendChild(projects);
    };

    const initializeFolders = (folders) => {
        const inbox = document.createElement('button');
        inbox.classList.add('folder-button','inbox');
        const inboxIcon = document.createElement('span');
        inboxIcon.classList.add('material-icons');
        inboxIcon.textContent = 'inbox';
        inbox.appendChild(inboxIcon);
        inbox.insertAdjacentText('beforeend','Inbox');
        folders.appendChild(inbox);
    };

    const initializeprojects = (projects) => {
        const title = document.createElement('h2');
        const projectList = document.createElement('ul');

        const projectAddButton = document.createElement('button');

        projectList.classList.add('project-list');
        projectAddButton.classList.add('add-project');

        title.textContent = 'Projects';

        const projectAddButtonIcon = document.createElement('span');
        projectAddButtonIcon.classList.add('material-icons');
        projectAddButtonIcon.textContent = 'add';
        projectAddButton.appendChild(projectAddButtonIcon);
        projectAddButton.insertAdjacentText('beforeend','Add a project');

        projects.appendChild(title);
        projects.appendChild(projectList);
        projects.appendChild(projectAddButton);

    };

    const initializeContent = (content) => {
    };

    const initializeFooter = (footer) => {
        const info = document.createElement('p');
        info.textContent = "by Murad Ildarov";
        footer.appendChild(info);
    };

    const initializeLayout = () => {
        const body = document.querySelector('body');

        const header = document.createElement('header');
        const main = document.createElement('main');
        const footer = document.createElement('footer');

        initializeHeader(header);
        body.appendChild(header);

        initializeMain(main);
        body.appendChild(main);

        initializeFooter(footer);
        body.appendChild(footer); 
    };

    return {initializeLayout};
})();

const Task = (title, description, dueDate, priority, project) => {
    let done = false;
    return {title, description, dueDate, priority, project, done};
};

const Project = (title) => {
    return {title};
};

const displayUpdater = (() => {
    const updateTaskList = (taskList, task) => {
        const taskElement = document.createElement('li');   
        const taskDone = document.createElement('button');
        const taskPriority = document.createElement('span');
        const taskTitle = document.createElement('span');
        taskTitle.classList.add('task-title');
        const taskProject = document.createElement('span');
        const taskDescription = document.createElement('p');
        const taskDescriptionVisiblity = document.createElement('button');
        const taskDueDate = document.createElement('span');
        const taskDelete = document.createElement('button');
        const taskDoneIcon = document.createElement('span');
        taskDoneIcon.classList.add('material-icons');
        if(task.done === false) {
            taskDoneIcon.textContent = 'check_box_outline_blank';
        }
        else if(task.done === true) {
            taskDoneIcon.textContent = 'check_box';
        }
        taskDone.appendChild(taskDoneIcon);
        taskPriority.textContent = task.priority;
        taskTitle.textContent = task.title;
        taskProject.textContent = task.project;
        taskDescription.textContent = task.description;
        taskDueDate.textContent = task.dueDate;
        const taskDeleteIcon = document.createElement('span');
        taskDeleteIcon.classList.add('material-icons');
        taskDeleteIcon.textContent = 'close';
        taskDelete.appendChild(taskDeleteIcon);

        taskElement.appendChild(taskDone);
        taskElement.appendChild(taskPriority);
        taskElement.appendChild(taskTitle);
        taskElement.appendChild(taskProject);
        taskElement.appendChild(taskDueDate);
        taskElement.appendChild(taskDelete);

        taskList.appendChild(taskElement);
    };


    const updateContent = (choice, tasks) => {
        const content = document.querySelector('.content');
        content.innerHTML = '';
        const container = document.createElement('div')
        container.classList.add('content-container');

        const choiceTitle = document.createElement('h2');
        const taskList = document.createElement('ul')
        taskList.classList.add('task-list');
        const addTaskButton = document.createElement('button');
        addTaskButton.classList.add('add-task-button');
        addTaskButton.textContent = "Add a task";

        if(choice.classList[1] === 'inbox'){
            choiceTitle.textContent = 'Inbox';
            tasks.forEach(task => {
                updateTaskList(taskList, task);
            });
        }
        else {
            choiceTitle.textContent = choice.textContent;
            tasks.forEach(task => {
                if(task.project === choice.textContent){
                    updateTaskList(taskList, task);
                }
            });
        }

        choiceTitle.classList.add('choice-title');
        container.appendChild(choiceTitle);
        container.appendChild(addTaskButton);
        container.appendChild(taskList);
        content.appendChild(container);
    };

    const updateProjectList = (projects) => {
        const projectList = document.querySelector('.project-list');
        projects.forEach(project => {
            const projectElement = document.createElement('li');
            projectElement.classList.add('project-button');
            projectElement.textContent = project.title;
            projectList.appendChild(projectElement);
        });
    };

    return {updateContent, updateProjectList, updateTaskList};
})();

const logicHandler = (() => {
    let tasks = [];
    let projects = [];

    const addProject = (project) => {
        projects.push(project);
    };

    const addTask = (task) => {
        tasks.push(task);
    };

    const task1 = Task('Clean the house','There are some spiders that are dirty','2022', 1);
    const task2 = Task('Remove the mouse','There are some spiders that are dirty','2022', 1, 'work');
    addTask(task1);
    addTask(task2);
    const project1 = Project('work');
    const project2 = Project('gym');
    addProject(project1);
    addProject(project2); 
    
    const updateProjectList = () => {
        displayUpdater.updateProjectList(projects);
    };

    const switchFolder = () => {
        const folderButtons = document.querySelectorAll('.folder-button');
        folderButtons.forEach(folder => folder.addEventListener('click', () => {
            displayUpdater.updateContent(folder, tasks);
            enableAddTaskButton();
        }));
    };

    const switchProject = () => {
        const projectButtons = document.querySelectorAll('.project-button');
        projectButtons.forEach(project => project.addEventListener('click', () =>{
            displayUpdater.updateContent(project, tasks);
            enableAddTaskButton();
        }));
    };

    const openForm = (addTaskButton) => {
        addTaskButton.classList.add('hidden');
        const form = document.createElement('form');
        
        const taskPriority = document.createElement('select');
        const taskTitle = document.createElement('input');
        const taskProject = document.createElement('select');
        const taskDueDate = document.createElement('input');
        const taskDescription = document.createElement('textarea');
        const buttonAddOrCancel = document.createElement('div');
        const buttonAdd = document.createElement('button');
        const buttonCancel = document.createElement('button');

        const optionPriority = document.createElement('option');
        optionPriority.value = "";
        optionPriority.textContent = "No priority";
        optionPriority.selected = true;
        taskPriority.appendChild(optionPriority);
        for(let i=0; i<10; i++){
            const optionPriority = document.createElement('option');
            optionPriority.value = i+1;
            optionPriority.textContent = i+1;
            taskPriority.appendChild(optionPriority);
        }
        
        taskTitle.required = true;
        taskTitle.placeholder = "Task";

        const optionProject = document.createElement('option');
        optionProject.value = "";
        optionProject.textContent =  "No project";
        taskProject.appendChild(optionProject);
        projects.forEach(project => {
            const optionProject = document.createElement('option');
            optionProject.value = project.title;
            optionProject.textContent =  project.title;
            taskProject.appendChild(optionProject);
        });
 
        taskDueDate.type = 'date';

        buttonAdd.type = 'button';
        buttonCancel.type = 'button';
        buttonAdd.textContent = 'Add';
        buttonCancel.textContent = 'Cancel';

        buttonCancel.addEventListener('click', () => {
            form.classList.add('hidden');
            addTaskButton.classList.remove('hidden');
        });
        buttonAdd.addEventListener('click', () => {
            const newTask = Task(taskTitle.value, taskDescription.value, taskDueDate.value, taskPriority.value, taskProject.value);
            tasks.push(newTask);
            tasks.forEach(task => {
                displayUpdater.updateTaskList(document.querySelector('.task-list'), task);
            });

            form.classList.add('hidden');
            addTaskButton.classList.remove('hidden');
        });

        buttonAddOrCancel.classList.add('add-or-cancel');

        buttonAddOrCancel.appendChild(buttonAdd);
        buttonAddOrCancel.appendChild(buttonCancel);

        form.appendChild(taskPriority);
        form.appendChild(taskTitle);
        form.appendChild(taskProject);
        form.appendChild(taskDueDate);
        form.appendChild(taskDescription);
        form.appendChild(buttonAddOrCancel);

        const choiceTitle = document.querySelector('.choice-title');
        choiceTitle.after(form);
    };

    const enableAddTaskButton = () => {
        const addTaskButton = document.querySelector('.add-task-button');
        addTaskButton.addEventListener('click', () => openForm(addTaskButton));
    };

    return {switchFolder, switchProject, updateProjectList};
})();



export {displayInitializer, logicHandler};