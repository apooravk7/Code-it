function run(){
    const htmlCode = document.getElementById("htmlCode").value
    const cssCode = document.getElementById("cssCode").value
    const jsCode = document.getElementById("jsCode").value
    const output = document.getElementById("output")

    output.contentDocument.body.innerHTML = htmlCode +"<style>"+cssCode+"</style>"
    output.contentWindow.eval(jsCode)
}