class Tab {
    constructor(controlClass, tabClass, ) {
        this.controlClass = controlClass;
        this.tabClass = tabClass;
        this.control = document.querySelectorAll(this.controlClass);
        this.tab = document.querySelectorAll(this.tabClass);
    }

    init(){
        this.control.forEach(btn => {
            let tabId = btn.getAttribute("data-tab");
            let currentTab = document.querySelector(tabId);
            btn.addEventListener("click", () => {
                this.control.forEach(btn => btn.classList.remove("active"));
                this.tab.forEach(tab => tab.classList.remove("active"));
                btn.classList.add("active");
                currentTab.classList.add("active");  
            })
        })
    }

    next(currentBtn, currentTab, timer){
        setTimeout(() => {
            currentBtn.classList.remove("active");
            currentBtn.nextElementSibling.classList.add("active");
            currentTab.classList.remove("active");
            currentTab.nextElementSibling.classList.add("active");

        }, timer);
        console.log(currentTab.nextElementSibling);
    }
}

let tab = new Tab(".control", ".tab_item");
tab.init();


