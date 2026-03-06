function launchBrowser(browserName)
{
    if(browserName === "chrome")
    {
        console.log("Yeah!! This is ChromeBrowser!!")
    }else{
        console.log("OOPS !! This is not a chromeBrowser")
    }
}

function runTest(testType)
{
    switch(testType)
    {
        case "Sanity":
            console.log("sanity is running")
break
        case "regression":
            console.log("regression is running")
break
        default:
        console.log("Smoke is running")        
break
    }
    
}
launchBrowser("Firefox")
runTest("critical");