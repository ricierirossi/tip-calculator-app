const widthScreen = 1366
const heightScreen = 635

const elementPx = (width, height) => {
    console.log(
        `Width = ${width / widthScreen * 100}`, 
    )
    console.log(
        `Height = ${height / heightScreen * 100}`
    )
}

elementPx(260, 285)

