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
        const today = document.createElement('button');
        const upcoming = document.createElement('button');
        inbox.classList.add('folder-button','inbox');
        today.classList.add('folder-button','today');
        upcoming.classList.add('folder-button','upcoming');

        const inboxIcon = document.createElement('span');
        const todayIcon = document.createElement('span');
        const upcomingIcon = document.createElement('span');

        inboxIcon.classList.add('material-icons');
        todayIcon.classList.add('material-icons');
        upcomingIcon.classList.add('material-icons');

        inboxIcon.textContent = 'inbox';
        todayIcon.textContent = 'today';
        upcomingIcon.textContent = 'date_range';

        inbox.appendChild(inboxIcon);
        today.appendChild(todayIcon);
        upcoming.appendChild(upcomingIcon);

        inbox.insertAdjacentText('beforeend','Inbox');
        today.insertAdjacentText('beforeend','Today');
        upcoming.insertAdjacentText('beforeend','Upcoming');

        folders.appendChild(inbox);
        folders.appendChild(today);
        folders.appendChild(upcoming);
    };

    const initializeprojects = (projects) => {
        const title = document.createElement('h2');
        const projectList = document.createElement('div');
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

const displayUpdater = (() => {
    const updateContent = (choice, tasks) => {
        const content = document.querySelector('.content');
        content.innerHTML = '';
        const container = document.createElement('div')
        container.classList.add('content-container');

        const choiceTitle = document.createElement('h2');
        const taskList = document.createElement('ul')
        taskList.classList.add('task-list');

        if(choice.classList[1] === 'inbox'){
            choiceTitle.textContent = 'Inbox';
            tasks.forEach(task => {
                console.log(task);
                const taskElement = document.createElement('li');
                
                const taskDone = document.createElement('button');
                const taskPriority = document.createElement('span');
                const taskTitle = document.createElement('span');
                const taskProject = document.createElement('p');
                const taskDescription = document.createElement('p');
                const taskDescriptionVisiblity = document.createElement('button');
                const taskDueDate = document.createElement('span');
                const taskDelete = document.createElement('button');

                taskElement.appendChild(taskDone);
                taskElement.appendChild(taskPriority);
                taskElement.appendChild(taskTitle);
                taskElement.appendChild(taskProject);
                taskElement.appendChild(taskDueDate);
                taskElement.appendChild(taskDelete);

                taskList.appendChild(taskElement);
            });
        }
        else if(choice.classList[1] === 'today'){
            choiceTitle.textContent = 'Today'
        }
        else if(choice.classList[1] === 'upcoming') {
            choiceTitle.textContent = 'Upcoming';
        }
        else {
            choiceTitle.textContent = 'Project name';
        }

        container.appendChild(choiceTitle);
        container.appendChild(taskList);
        content.appendChild(container);
    };

    const updateProjectList = () => {

    };

    return {updateContent, updateProjectList};
})();

const logicHandler = (() => {
    let tasks = [];

    const addTask = (task) => {
        tasks.push(task);
    }

    const task = Task('Clean the house','There are some spiders that are dirty','2022', 1);
    addTask(task);    

    const switchFolder = () => {
        const folderButtons = document.querySelectorAll('.folder-button');
        folderButtons.forEach(folder => folder.addEventListener('click', () => {
            displayUpdater.updateContent(folder, tasks);
        }));
    };

    return {switchFolder, addTask};
})();



export {displayInitializer, logicHandler};