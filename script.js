let menuItems = [

    {
        title: "Team",
        icon: '<i class="fa-solid fa-people-group"></i>',
        menu: [
            {
                title: "CEO: John Smith"
            },
            {
                title: "Dev: John Doe"
            }
        ]
    },
    {
        title: "Services",
        icon: '',
        menu: [
            {
                title: "Web & App development"
            },
            {
                title: "Web & App development"
            },
            {
                title: "Web & App development"
            }
        ]
    },
    {
        title: "Reviews",
        icon: '',
        menu: [
            {
                title: "Oleg H. Good"
            },
            {
                title: "Viktor K. Very good"
            },
            {
                title: "Alex G. Not bad"
            }
        ]
    },
    {
        title: "Order",
        icon: '',
        menu: [
            {
                title: "Iphone 12"
            },
            {
                title: "Xiaomi"
            },
            {
                title: "Samsung s21"
            }
        ]
    },
    {
        title: "Contacts",
        icon: '',
        menu: [
            {
                title: "Jimmy: 373 60114985"
            },
            {
                title: "Vaskis: 373 7676997"
            },
            {
                title: "Shon Baily 373 6988834"
            }
        ]
    },
]
//hw refactor this code so it rendeds the icon where there is an icon
const renderMenu = function (parentElemet, items) {
   let html = `<ul>`
   for (let i = 0; i < items.length; i++) {
    html += `<li>
        <a href="${items[i].url ?? '#'}" onclick="renderSubMenu(${i}, ${items[i].menu != undefined})">
        ${items[i].icon ?? ''}
        ${items[i].title}
        </a>
    </li>`
    }
    html += `</ul>`
    parentElemet.innerHTML += html
}
const renderSubMenu = function (index, render) {
    if (render) {
        let li = document.querySelector(`li:nth-child(${index+1})`) 

        if (!menuItems[index].open) {
            renderMenu(li, menuItems[index].menu)
            menuItems[index].open = true
        } else {
            navBar.innerHTML = ``
            renderMenu(navBar, menuItems)
            menuItems[index].open = false
        }
        
    }
}
renderMenu(navBar, menuItems)