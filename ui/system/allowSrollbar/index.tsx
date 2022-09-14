
export const allowScrollbar = (scrollable:boolean) => {

    if(!scrollable) {
        const widthScroll = window.innerWidth - document.body.offsetWidth
        document.body.style.cssText = `
                overflow-y: hidden;
                width: 100%;
                height: 100%;
                padding-right: ${widthScroll}px;   
            `
            return 
    }
    if(scrollable) {
        document.body.style.cssText = `
            overflow-y: visible;
            width: 100%;
            height: 100%;
            padding-right: 0;
        `
        return 
    }
}