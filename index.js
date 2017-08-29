
// element 为需要复制内容的DOM对象
const copyHandle = (e)=>{
    e.preventDefault()
    e.stopPropagation()
    if (window.getSelection) {
        var sel = window.getSelection()
        sel.removeAllRanges()
        var range = document.createRange()
        range.selectNodeContents(element)
        sel.addRange(range)
        document.execCommand('copy')
        sel.removeAllRanges()
    } else if (document.selection) {
        var textRange = document.body.createTextRange()
        textRange.moveToElementText(element)
        textRange.select()
        document.execCommand('copy')
        document.selection.empty()
    }
}