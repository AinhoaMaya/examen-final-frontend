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
        number: '+1 (887) 744-6950',
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
          gap: 5rem;
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
          grid-template-rows: repeat(9, auto);
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
        <!-- <div class="table-header">
          <div class="header-input">
            <form>
              <input type="text" id="name" name="name" placeholder="Search 100 records...">
            </form>
          </div>
          <div class="header-menu">
            <nav class="nav-menu">
              <span>Sort by</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu-down</title><path d="M7,10L12,15L17,10H7Z" /></svg>
            </nav>

            <div class="header-button">
              <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
              <span>Add Customer</span>
              </button>
            </div>
          </div>
        </div>

        <div class="table">
          <div class="table-check">
            <div class="title-check">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>checkbox-blank-outline</title><path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" /></svg>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>checkbox-blank-outline</title><path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>checkbox-blank-outline</title><path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>checkbox-blank-outline</title><path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>checkbox-blank-outline</title><path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>checkbox-blank-outline</title><path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>checkbox-blank-outline</title><path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>checkbox-blank-outline</title><path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>checkbox-blank-outline</title><path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" /></svg>
          </div>

          <div class="table-id">
            <div class="title">
              <span>#</span>
            </div>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
          </div>

          <div class="table-name">
            <div class="title">
              <span>customer name</span>
            </div>

            <div class="name-content">
              <div class="name-content-user">
                <div class="name-img">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle-outline</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                </div>
                <div class="name-text">
                  <span>Joe Schilder</span>
                  <span>Lorem@lorem.com</span>
                </div>
              </div>

              <div class="name-content-user">
                <div class="name-img">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle-outline</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                </div>
                <div class="name-text">
                  <span>Joe Schilder</span>
                  <span>Lorem@lorem.com</span>
                </div>
              </div>

              <div class="name-content-user">
                <div class="name-img">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle-outline</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                </div>
                <div class="name-text">
                  <span>Joe Schilder</span>
                  <span>Lorem@lorem.com</span>
                </div>
              </div>
              
              <div class="name-content-user">
                <div class="name-img">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle-outline</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                </div>
                <div class="name-text">
                  <span>Joe Schilder</span>
                  <span>Lorem@lorem.com</span>
                </div>
              </div>
              
              <div class="name-content-user">
                <div class="name-img">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle-outline</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                </div>
                <div class="name-text">
                  <span>Joe Schilder</span>
                  <span>Lorem@lorem.com</span>
                </div>
              </div>

              <div class="name-content-user">
                <div class="name-img">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle-outline</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                </div>
                <div class="name-text">
                  <span>Joe Schilder</span>
                  <span>Lorem@lorem.com</span>
                </div>
              </div>

              <div class="name-content-user">
                <div class="name-img">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle-outline</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                </div>
                <div class="name-text">
                  <span>Joe Schilder</span>
                  <span>Lorem@lorem.com</span>
                </div>
              </div>

              <div class="name-content-user">
              <div class="name-img">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle-outline</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
              </div>
              <div class="name-text">
                <span>Joe Schilder</span>
                <span>Lorem@lorem.com</span>
              </div>
              </div>
            </div>
          </div>

          <div class="table-contact">
            <div class="title">
              <span>contact</span>
            </div>
            <span>+1 (731) 342-9783</span>
            <span>+1 (887) 744-6950</span>
            <span>+1 (618) 787-3453</span>
            <span>+1 (415) 628-7505</span>
            <span>+1 (856) 459-8945</span>
            <span>+1 (507) 561-6927</span>
            <span>+1 (722) 952-7792</span>
            <span>+1 (675) 882-6037</span>
          </div>

          <div class="table-age">
            <div class="title">
              <span>age</span>
            </div>
            <span>39</span>
            <span>52</span>
            <span>45</span>
            <span>29</span>
            <span>58</span>
            <span>60</span>
            <span>27</span>
            <span>26</span>
          </div>

          <div class="table-country">
            <div class="title">
              <span>country</span>
            </div>
            <span>Canada</span>
            <span>Thailand</span>
            <span>Barbadps</span>
            <span>Italy</span>
            <span>Mauritius</span>
            <span>American Samoa</span>
            <span>Gibraltar</span>
            <span>Central African Republic</span>
          </div>

          <div class="table-status">
            <div class="title">
              <span>status</span>
            </div>
            <span>Rejected</span>
            <span>Verified</span>
            <span>Verified</span>
            <span>Verified</span>
            <span>Pending</span>
            <span>Rejected</span>
            <span>Verified</span>
            <span>Rejected</span>
          </div>

          <div class="table-actions">
            <div class="title">
              <span>actions</span>
            </div>
            <div class="actions-svgs">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>eye-outline</title><path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>square-edit-outline</title><path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-outline</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>
            </div>
            <div class="actions-svgs">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>eye-outline</title><path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>square-edit-outline</title><path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-outline</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>
            </div>
            <div class="actions-svgs">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>eye-outline</title><path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>square-edit-outline</title><path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-outline</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>
            </div>
            <div class="actions-svgs">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>eye-outline</title><path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>square-edit-outline</title><path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-outline</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>
            </div>
            <div class="actions-svgs">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>eye-outline</title><path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>square-edit-outline</title><path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-outline</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>
            </div>
            <div class="actions-svgs">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>eye-outline</title><path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>square-edit-outline</title><path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-outline</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>
            </div>
            <div class="actions-svgs">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>eye-outline</title><path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>square-edit-outline</title><path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-outline</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>
            </div>
            <div class="actions-svgs">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>eye-outline</title><path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>square-edit-outline</title><path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-outline</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>
            </div>
          </div>
        </div> -->
      </div>
    `
    const tableContainer = this.shadow.querySelector('.table-container');

    this.data.forEach((tables) => {
      // Header
      const tableHeader = document.createElement('div');
      tableContainer.appendChild(tableHeader);
      tableHeader.classList.add('table-header');

      const headerInput = document.createElement('div');
      tableHeader.appendChild(headerInput);
      tableHeader.classList.add('header-input');

      const form = document.createElement("form");
      headerInput.appendChild(form);

      const input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("id", "name");
      input.setAttribute("name", "name");
      input.setAttribute("placeholder", "Search 100 records...");
      form.appendChild(input);

      const headerMenu = document.createElement('div');
      tableHeader.appendChild(headerMenu);
      headerMenu.classList.add('header-menu');

      const nav = document.createElement('nav');
      headerMenu.appendChild(nav);
      nav.classList.add('nav-menu');

      const spanNavMenu = document.createElement('span');
      nav.appendChild(spanNavMenu);
      spanNavMenu.classList.add('nav-menu');

      const svgNavMenu = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgNavMenu.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svgNavMenu.setAttribute("viewBox", "0 0 24 24");
      const pathNavMenu = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathNavMenu.setAttribute("d", "M7,10L12,15L17,10H7Z");
      nav.appendChild(svgNavMenu);
      svgNavMenu.appendChild(pathNavMenu);

      const headerButton = document.createElement('div');
      headerMenu.appendChild(headerButton);
      headerButton.classList.add('header-button');

      const buttonHeader = document.createElement('button');
      headerButton.appendChild(buttonHeader);

      // const svgButtonHeader = document.createElement('svg');
      // headerButton.appendChild(svgButtonHeader);

      const svgButtonHeader = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgButtonHeader.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svgButtonHeader.setAttribute("viewBox", "0 0 24 24");
      const pathButtonHeader = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathButtonHeader.setAttribute("d", "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z");
      headerButton.appendChild(svgButtonHeader);
      svgButtonHeader.appendChild(pathButtonHeader);

      // Contenido
      const table = document.createElement('div');
      tableContainer.appendChild(table);
      table.classList.add('table');

      const tableCheck = document.createElement('div');
      table.appendChild(tableCheck);
      tableCheck.classList.add('table-check');

      const titleCheck = document.createElement('div');
      tableCheck.appendChild(titleCheck);
      titleCheck.classList.add('table-title');

      const svgTableCheck = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgTableCheck.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svgTableCheck.setAttribute("viewBox", "0 0 24 24");
      const pathTableCheck = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathTableCheck.setAttribute("d", "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z");
      tableCheck.appendChild(svgTableCheck);
      svgTableCheck.appendChild(pathTableCheck);

      const tableId = document.createElement('div');
      table.appendChild(tableId);
      tableId.classList.add('table-id');

      const titleId = document.createElement('div');
      table.appendChild(titleId);
      titleId.classList.add('title');

      const idSpan = document.createElement('span');
      titleId.appendChild(idSpan);
      idSpan.textContent = tables.id;

      const tableName = document.createElement('div');
      table.appendChild(tableName);
      tableName.classList.add('table-name');

      const titleName = document.createElement('div');
      tableName.appendChild(titleName);
      titleName.classList.add('title');

      const nameSpan = document.createElement('span');
      titleName.appendChild(nameSpan);
      nameSpan.textContent = 'customer name';

      const nameContent = document.createElement('div');
      tableName.appendChild(nameContent);
      nameContent.classList.add('name-content');

      const nameContentUser = document.createElement('div');
      nameContent.appendChild(nameContentUser);
      nameConameContentUserntent.classList.add('name-content-user');

      const nameImg = document.createElement('div');
      nameContentUser.appendChild(nameImg);
      nameImg.classList.add('name-img');

      // const svgNameImg = document.createElement('svg');
      // nameImg.appendChild(svgNameImg);

      const svgNameImg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgNameImg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svgNameImg.setAttribute("viewBox", "0 0 24 24");
      const pathNameImg = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathNameImg.setAttribute("d", "M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z");
      nameImg.appendChild(svgNameImg);
      svgNameImg.appendChild(pathNameImg);

      const nameText = document.createElement('div');
      nameContentUser.appendChild(nameText);
      nameText.classList.add('name-text');

      const textSpanName = document.createElement('span');
      nameText.appendChild(textSpanName);
      textSpanName.textContent = tables.name;

      const textSpanEmail = document.createElement('span');
      nameText.appendChild(textSpanEmail);
      textSpanEmail.textContent = tables.email;

      const tableContact = document.createElement('div');
      table.appendChild(tableContact);
      tableContact.classList.add('table-contact');

      const titleContact = document.createElement('div');
      tableContact.appendChild(titleContact);
      titleContact.classList.add('title');

      const contactSpan = document.createElement('span');
      titleContact.appendChild(contactSpan);
      contactSpan.textContent = 'contact';

      const contactSpanNumber = document.createElement('span');
      tableContact.appendChild(contactSpanNumber);
      contactSpanNumber.textContent = tables.number;

      const tableAge = document.createElement('div');
      table.appendChild(tableAge);
      tableAge.classList.add('table-age');

      const titleAge = document.createElement('div');
      tableAge.appendChild(titleAge);
      titleAge.classList.add('title');

      const ageSpan = document.createElement('span');
      titleAge.appendChild(ageSpan);
      ageSpan.textContent = 'age';

      const ageSpanNumber = document.createElement('span');
      tableAge.appendChild(ageSpanNumber);
      ageSpanNumber.textContent = tables.age;

      const tableCountry = document.createElement('div');
      table.appendChild(tableCountry);
      tableCountry.classList.add('table-country');

      const titleCountry = document.createElement('div');
      tableCountry.appendChild(titleCountry);
      titleCountry.classList.add('title');

      const countrySpan = document.createElement('span');
      titleCountry.appendChild(countrySpan);
      countrySpan.textContent = 'country';

      const countrySpanName = document.createElement('span');
      tableCountry.appendChild(countrySpanName);
      countrySpanName.textContent = tables.country;

      const tableStatus = document.createElement('div');
      table.appendChild(tableStatus);
      tableStatus.classList.add('table-status');

      const titleStatus = document.createElement('div');
      tableStatus.appendChild(titleStatus);
      titleStatus.classList.add('title');

      const statusSpan = document.createElement('span');
      titleStatus.appendChild(statusSpan);
      statusSpan.textContent = 'status';

      const statusSpanName = document.createElement('span');
      tableStatus.appendChild(statusSpanName);
      statusSpanName.textContent = tables.status;

      const tableActions = document.createElement('div');
      table.appendChild(tableActions);
      tableActions.classList.add('table-actions');

      const titleActions = document.createElement('div');
      tableActions.appendChild(titleActions);
      titleActions.classList.add('title');

      const actionsSpan = document.createElement('span');
      titleActions.appendChild(actionsSpan);
      actionsSpan.textContent = 'actions';

      const actionsSvgs = document.createElement('div');
      table.appendChild(actionsSvgs);
      actionsSvgs.classList.add('actions-svgs');

      // const svgActionsSvgs = document.createElement('svg');
      // actionsSvgs.appendChild(svgActionsSvgs);

      const actionsSvgEye = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      actionsSvgEye.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      actionsSvgEye.setAttribute("viewBox", "0 0 24 24");
      const pathEye = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathEye.setAttribute("d", "M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z");
      actionsSvgs.appendChild(actionsSvgEye);
      actionsSvgEye.appendChild(pathEye);

      const actionsSvgEdit = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      actionsSvgEdit.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      actionsSvgEdit.setAttribute("viewBox", "0 0 24 24");
      const pathEdit = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathEdit.setAttribute("d", "M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z");
      actionsSvgEdit.appendChild(actionsSvgEdit);
      actionsSvgEdit.appendChild(pathEdit);

      const actionsSvgDelete = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      actionsSvgDelete.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      actionsSvgDelete.setAttribute("viewBox", "0 0 24 24");
      const pathDelete = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathDelete.setAttribute("d", "M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z");
      actionsSvgDelete.appendChild(actionsSvgDelete);
      actionsSvgDelete.appendChild(pathDelete);
    });
  }
}

customElements.define('table-component', Table)