const displayHandler = (() => {
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
        inbox.classList.add('folder-button');
        today.classList.add('folder-button');
        upcoming.classList.add('folder-button');

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

        projectList.textContent = "SSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DSSSDMK KSD SDK SDK DS";

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

export {displayHandler};