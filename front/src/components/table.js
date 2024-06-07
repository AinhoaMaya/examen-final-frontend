class Table extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.data = []
  }

  async connectedCallback() {
    await this.loadData();
    await this.render();
  }

  loadData() {
    // const response = await fetch('')
    this.data = [
      {
        id: 1,
        name: 'Joe Schilder',
        email: 'Lorem@lorem.com',
        contact: '+1 (731) 342-9783',
        age: 39,
        country: 'Canada',
        status: 'Rejected'
      },
      {
        id: 2,
        name: 'Joe Schilder',
        email: 'Lorem@lorem.com',
        contact: '+1 (887) 744-6950',
        age: 52,
        country: 'Thailand',
        status: 'Verified'
      },
      {
        id: 3,
        name: 'Joe Schilder',
        email: 'Lorem@lorem.com',
        contact: '+1 (618) 787-3453',
        age: 45,
        country: 'Barbados',
        status: 'Verified'
      },
      {
        id: 4,
        name: 'Joe Schilder',
        email: 'Lorem@lorem.com',
        contact: '+1 (415) 628-7505',
        age: 29,
        country: 'Italy',
        status: 'Verified'
      },
      {
        id: 5,
        name: 'Joe Schilder',
        email: 'Lorem@lorem.com',
        contact: '+1 (856) 459-8945',
        age: 58,
        country: 'Mauritius',
        status: 'Pending'
      },
      {
        id: 6,
        name: 'Joe Schilder',
        email: 'Lorem@lorem.com',
        contact: '+1 (507) 561-6927',
        age: 60,
        country: 'American Samoa',
        status: 'Rejected'
      },
      {
        id: 7,
        name: 'Joe Schilder',
        email: 'Lorem@lorem.com',
        contact: '+1 (722) 952-7792',
        age: 27,
        country: 'Gibraltar',
        status: 'Verified'
      },
      {
        id: 8,
        name: 'Joe Schilder',
        email: 'Lorem@lorem.com',
        contact: '+1 (675) 882-6037',
        age: 26,
        country: 'Central African Republic',
        status: 'Rejected'
      }
    ]
  }

  render () {
    this.shadow.innerHTML =
      /* html */` 
      <style>
        .table-container{
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        }

        .table-header{
          display: flex;
          justify-content: space-between;
          width: 100%;
          gap: 40rem;
        }

        .header-input input{
          min-height: 2.5rem;
        }

        .header-menu{
          display: flex;
          gap: 2rem;
        }

        .header-menu button{
          min-height: 3rem;
          min-width: 10rem;
          background-color: blue;
          border-radius: 0.2rem;
          color: white;
          cursor: pointer;
          outline: none;
        }

        .header-button{
          align-items: center;
          justify-content: center;
          display: flex;
        }

        .header-button svg{
          cursor: pointer;
          width: 1.5rem;
          fill: white;
        }
        
        .nav-menu{
          align-items: center;
          display: flex;
          justify-content: space-between;
          padding: 0 0.5rem;
          min-width: 10rem;
        }

        .nav-menu{
          border: 1px solid gray;
        }

        .nav-menu svg{
          cursor: pointer;
          color: gray;
          width: 1.5rem;
        }

        .table{
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          gap: 1rem;
          align-items: center;
        }

        .title{
          margin-bottom: 1rem;
          text-transform: uppercase;
          font-weight: 800;
        }

        .table-check, .table-id, .table-contact, .table-age, .table-country, .table-status, .table-actions{
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2rem;
        }

        .table-check{
          margin-bottom: 0.4rem;
        }

        .table-check svg{
          width: 1.3rem;
        }

        .name-content{
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .name-content-user{
          display: flex;
          gap: 1rem;
        }

        .name-img svg{
          width: 2.5rem;
        }

        .name-text{
          display: flex;
          flex-direction: column;
        }

        .actions-svgs{
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          width: 5rem;
        }

        .table-check, .table-check svg, .table-id span, .table-contact span, .table-age span, .table-country span, .table-status span, .table-actions svg{
          min-height: 2rem;
        }

        .table-check svg{
          min-height: 2rem;
        }

        .name-text span{
          min-height: 1.8rem;
        }
      </style>

      <div class="table-container">

      </div>
    `


    const tableContainer = this.shadow.querySelector('.table-container');

    // Header
    const tableHeader = document.createElement('div');
    tableHeader.classList.add('table-header');
    tableContainer.appendChild(tableHeader);

    const headerInput = document.createElement('div');
    headerInput.classList.add('header-input');
    tableHeader.appendChild(headerInput);

    const form = document.createElement("form");
    headerInput.appendChild(form);

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "name");
    input.setAttribute("name", "name");
    input.setAttribute("placeholder", "Search 100 records...");
    form.appendChild(input);

    const headerMenu = document.createElement('div');
    headerMenu.classList.add('header-menu');
    tableHeader.appendChild(headerMenu);

    const nav = document.createElement('nav');
    nav.classList.add('nav-menu');
    headerMenu.appendChild(nav);

    const spanNavMenu = document.createElement('span');
    spanNavMenu.textContent = 'Sort by';
    nav.appendChild(spanNavMenu);

    const svgNavMenu = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgNavMenu.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgNavMenu.setAttribute("viewBox", "0 0 24 24");
    const pathNavMenu = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathNavMenu.setAttribute("d", "M7,10L12,15L17,10H7Z");
    svgNavMenu.appendChild(pathNavMenu);
    nav.appendChild(svgNavMenu);

    const headerButton = document.createElement('div');
    headerButton.classList.add('header-button');
    headerMenu.appendChild(headerButton);

    const buttonHeader = document.createElement('button');
    headerButton.appendChild(buttonHeader);

    const svgButtonHeader = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgButtonHeader.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgButtonHeader.setAttribute("viewBox", "0 0 24 24");
    const pathButtonHeader = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathButtonHeader.setAttribute("d", "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z");
    svgButtonHeader.appendChild(pathButtonHeader);
    buttonHeader.appendChild(svgButtonHeader);

    const spanButtonHeader = document.createElement('span');
    spanButtonHeader.textContent = 'Add Customer';
    buttonHeader.appendChild(spanButtonHeader);

    // const nameSpan = document.createElement('span');
    // spanButtonHeader.classList.add('title')
    // nameSpan.textContent = 'customer name';
    // tableContainer.appendChild(nameSpan);
          
    this.data.forEach(tables => {
      // Contenido
      const table = document.createElement('div');
      table.classList.add('table');
      tableContainer.appendChild(table);

      const tableCheck = document.createElement('div');
      tableCheck.classList.add('table-check');
      table.appendChild(tableCheck);

      const titleCheck = document.createElement('div');
      titleCheck.classList.add('table-title');
      tableCheck.appendChild(titleCheck);

      const svgTableCheck = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgTableCheck.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svgTableCheck.setAttribute("viewBox", "0 0 24 24");
      const pathTableCheck = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathTableCheck.setAttribute("d", "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z");
      svgTableCheck.appendChild(pathTableCheck);
      tableCheck.appendChild(svgTableCheck);

      const tableId = document.createElement('div');
      tableId.classList.add('table-id');
      table.appendChild(tableId);

      const titleId = document.createElement('div');
      titleId.classList.add('title');
      tableId.appendChild(titleId);

      const idSpan = document.createElement('span');
      idSpan.textContent = tables.id;
      titleId.appendChild(idSpan);

      const tableName = document.createElement('div');
      tableName.classList.add('table-name');
      table.appendChild(tableName);

      const titleName = document.createElement('div');
      titleName.classList.add('title');
      tableName.appendChild(titleName);

      // const nameSpan = document.createElement('span');
      // nameSpan.textContent = 'customer name';
      // titleName.appendChild(nameSpan);

      const nameContent = document.createElement('div');
      nameContent.classList.add('name-content');
      tableName.appendChild(nameContent);

      const nameContentUser = document.createElement('div');
      nameContentUser.classList.add('name-content-user');
      nameContent.appendChild(nameContentUser);

      const nameImg = document.createElement('div');
      nameImg.classList.add('name-img');
      nameContentUser.appendChild(nameImg);

      const svgNameImg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgNameImg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svgNameImg.setAttribute("viewBox", "0 0 24 24");
      const pathNameImg = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathNameImg.setAttribute("d", "M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z");
      svgNameImg.appendChild(pathNameImg);
      nameImg.appendChild(svgNameImg);

      const nameText = document.createElement('div');
      nameText.classList.add('name-text');
      nameContentUser.appendChild(nameText);

      const nameTextSpan = document.createElement('span');
      nameTextSpan.textContent = tables.name;
      nameText.appendChild(nameTextSpan);

      const nameEmailSpan = document.createElement('span');
      nameEmailSpan.textContent = tables.email;
      nameText.appendChild(nameEmailSpan);

      const tableContact = document.createElement('div');
      tableContact.classList.add('table-contact');
      table.appendChild(tableContact);

      const titleContact = document.createElement('div');
      titleContact.classList.add('title');
      tableContact.appendChild(titleContact);

      const contactSpan = document.createElement('span');
      contactSpan.textContent = tables.contact;
      tableContact.appendChild(contactSpan);

      const tableAge = document.createElement('div');
      tableAge.classList.add('table-age');
      table.appendChild(tableAge);

      const titleAge = document.createElement('div');
      titleAge.classList.add('title');
      tableAge.appendChild(titleAge);

      const ageSpan = document.createElement('span');
      ageSpan.textContent = tables.age;
      tableAge.appendChild(ageSpan);

      const tableCountry = document.createElement('div');
      tableCountry.classList.add('table-country');
      table.appendChild(tableCountry);

      const titleCountry = document.createElement('div');
      titleCountry.classList.add('title');
      tableCountry.appendChild(titleCountry);

      const countrySpan = document.createElement('span');
      countrySpan.textContent = tables.country;
      tableCountry.appendChild(countrySpan);

      const tableStatus = document.createElement('div');
      tableStatus.classList.add('table-status');
      table.appendChild(tableStatus);

      const titleStatus = document.createElement('div');
      titleStatus.classList.add('title');
      tableStatus.appendChild(titleStatus);

      const statusSpan = document.createElement('span');
      statusSpan.textContent = tables.status;
      tableStatus.appendChild(statusSpan);

      const tableActions = document.createElement('div');
      tableActions.classList.add('table-actions');
      table.appendChild(tableActions);

      const titleActions = document.createElement('div');
      titleActions.classList.add('title');
      tableActions.appendChild(titleActions);

      const actionsSvgs = document.createElement('div');
      actionsSvgs.classList.add('actions-svgs');
      tableActions.appendChild(actionsSvgs);

      const svgActionsEye = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgActionsEye.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svgActionsEye.setAttribute("viewBox", "0 0 24 24");
      const pathActionsEye = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathActionsEye.setAttribute("d", "M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z");
      svgActionsEye.appendChild(pathActionsEye);
      actionsSvgs.appendChild(svgActionsEye);

      const svgActionsEdit = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgActionsEdit.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svgActionsEdit.setAttribute("viewBox", "0 0 24 24");
      const pathActionsEdit = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathActionsEdit.setAttribute("d", "M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z");
      svgActionsEdit.appendChild(pathActionsEdit);
      actionsSvgs.appendChild(svgActionsEdit);

      const svgActionsDelete = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgActionsDelete.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svgActionsDelete.setAttribute("viewBox", "0 0 24 24");
      const pathActionsDelete = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathActionsDelete.setAttribute("d", "M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z");
      svgActionsDelete.appendChild(pathActionsDelete);
      actionsSvgs.appendChild(svgActionsDelete);
    });
  }
}

customElements.define('table-component', Table)