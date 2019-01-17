// Global variables and constants
var iDefHeight=200;	// Default height and width of hyperlink list popup window
var iDefWidth=250;
var iPopupOpen=false;	// Whether the popup window is visible

// Event handlers: Capture various window and document events
window.onresize=ks_hideList;
window.onscroll=ks_hideList;
document.onclick=ks_hideList;
document.onkeypress=ks_EnterPressed;

// Function: Translate Enter key press to mouse click
function ks_EnterPressed() {
	window.event.cancelBubble=true;
	if (window.event.keyCode==13) event.srcElement.click();
	}
// Function: Close navigation list pop up window
function ks_hideList() {
	if (iPopupOpen) {
		ks_ListSpan.style.display="none";
		iPopupOpen=false;
		}
	}
// Function: Show or hide the navigation list pop up window
function ks_showList() {
	var iWidth=iDefWidth;
	var iHeight=iDefHeight;
	var oClicked=event.srcElement;
	var iTop=oClicked.offsetTop+15;
	var iLeft=oClicked.offsetLeft;
	var coll=ks_VBAIFrame.document.all.tags("DIV");
	
	// Make sure that events do not bubble up to parent handlers and close lists
	window.event.cancelBubble=true;
	ks_hideList();
	// Make the clicked DIVs visible and hide the others
	if (coll.length) {
		for (var i=0;i<coll.length;i++) {
			if (coll[i].id.toLowerCase()==oClicked.id.toLowerCase()) {
				coll[i].style.display="inline";
				}
			else {
				coll[i].style.display="none";
				}
			}
		}
	ks_ListSpan.style.display="inline";

	while (oClicked.offsetParent.tagName.toLowerCase()!="body") {
		oClicked = oClicked.offsetParent;
		iTop+=oClicked.offsetTop;
		iLeft+=oClicked.offsetLeft;
		}

	with (document.body) {
		// Adjust the horizontal position and width for narrow windows
		if (iLeft+iWidth>scrollLeft+offsetWidth) iLeft=scrollLeft+offsetWidth-iWidth-20;
		if (iLeft<scrollLeft) iLeft=scrollLeft;
		if (iWidth>offsetWidth) iWidth=offsetWidth-20;
		// Adjust the vertical position and height for short windows
		if ((ks_ListSpan.offsetHeight>0)&&(ks_ListSpan.offsetHeight<iHeight)) iHeight=ks_ListSpan.offsetHeight;
		if (iTop+iHeight>scrollTop+offsetHeight) iTop=scrollTop+offsetHeight-iHeight-20;
		if (iTop<scrollTop) iTop=scrollTop;
		if (iHeight>offsetHeight) iHeight=offsetHeight-20;
		}
	with (ks_ListSpan.style) {
		// Position the popup window
		pixelLeft=iLeft;
		pixelTop=iTop;
		pixelWidth=iWidth;
		pixelHeight=iHeight;
		}
	iPopupOpen=true;
	}
//显示，隐藏

var strHideTEXT="全部隐藏";
var strShowTEXT="全部显示";

function ks_ShowAll()
{
	// Expand all 
	var iSpan
	var iSpanSource
	var oSpan
	var sCaption
	var sAction
	var sImage
	
	// Determine the action, and the picture to replace
	sCaption=document.all("ShowType").innerHTML;
	if (sCaption==strShowTEXT)
		{
		sAction="cssDetailshow";
		sImage="../../images/bluedrop.gif"
		document.all("picHeader").src="../../images/collapsetri.gif";
		document.all("ShowType").innerHTML=strHideTEXT;
		}
	else
		{
		sAction="cssDetailhide";
		sImage="../../images/blueup.gif"
		document.all("picHeader").src="../../images/expandtri.gif";
		document.all("ShowType").innerHTML=strShowTEXT;
		}

	// Execute the action for all expand SPANs	
	for (iSpan=0; iSpan < document.all.tags("DIV").length; iSpan++)
		{	
			oSpan=document.all.tags("DIV").item(iSpan);
			iSpanSource=oSpan.sourceIndex;
			if (oSpan.id=="ExpCol")
			{
				document.all.tags("DIV").item(iSpan).className=sAction;
				if(document.all(iSpanSource-1).tagName=="IMG" && document.all(iSpanSource-2).tagName!="IMG")
				{
					document.all(iSpanSource-1).src=sImage;
				}
				else if(document.all(iSpanSource-2).tagName=="IMG")
				{
					document.all(iSpanSource-2).src=sImage
				}
				 
			}
			
			// Handle the Q tag added late for Loc
			if (document.all(iSpanSource-1).tagName=="Q")
			{
				document.all(iSpanSource-2).src=sImage;
			}
			
			
		}

	//show down pic
		for(n = 0;n < document.all("picArrow").length ; n++)
		{	
			if(document.all("ShowType").innerHTML == strHideTEXT)
			{
				document.all("picArrow").item(n).src = "../../images/bluedrop.gif"
			}
			else
			{
				document.all("picArrow").item(n).src = "../../images/blueup.gif"
			}
		}
}

function ks_ShowDetail()
{

	window.event.returnValue=0	

	//Expand or collapse if a list item is clicked.
	var open = event.srcElement;

	//Verify that the tag which was clicked was either the 
	//trigger tag or nested within a trigger tag.
	var el = ks_testParent(open,"A");
	if(null != el)
	{	
		var incr=0;
		var elmPos = 0;
		var parentSpan;
		var fBreak

		//Get the position of the element which was clicked
		elemPos = window.event.srcElement.sourceIndex;

		//Search for a SPAN tag
		for (parentSpan = window.event.srcElement.parentElement;
			parentSpan!=null;
			parentSpan = parentSpan.parentElement) 
		{
			//test if already at a span tag 
		    if (parentSpan.tagName=="DIV") 
			{
				//alert("Parent Element is a SPAN");
				incr=1;
				break;
			}
			
			//Test if the tag clicked was in a body tag or in any of the possible kinds of lists
			//we perform this test because nested lists require special handling
			if (parentSpan.tagName=="BODY" || parentSpan.tagName=="UL" || parentSpan.tagName=="OL"|| parentSpan.tagName=="P") 
			{
				//Determine where the span to be expanded is.  
				for (incr=1; (elemPos+incr) < document.all.length; incr++)
				{	
					//verify we are at an expandable Div tag
					if(document.all(elemPos+incr).tagName=="DIV" && 
					(document.all(elemPos+incr).className=="cssDetailshow" ||
					 document.all(elemPos+incr).className=="cssDetailhide"))
					{
						fBreak=1;
						break;
					}
					//If the next tag following the list item (li) is another 
					//list item(li) return in order to prevent accidentally opening
					//the next span in the list
					else if(document.all(elemPos+incr).tagName=="LI")
					{
						return;
					}
				}
			}
			//determine if we need to break out of the while loop (kind of a kludge since theres no goto in javascript)
			if(fBreak==1)
			{
				break;
			}
		}

	}
	else
	{
		//Alert("Return!");
		return;
	}

	//Now that we've identified the span, expand or collapse it
	if(document.all(elemPos+incr).className=="cssDetailhide")
	{
		
		document.all(elemPos+incr).className="cssDetailshow"
		document.all(elemPos+1).src="../../images/bluedrop.gif";
		if(open.tagName=="IMG"){open.src="../../images/bluedrop.gif";}
		if(open.tagName=="B")
			{
			if(open.parentElement.all.tags("IMG").length != 0)
				{open.parentElement.all.tags("IMG").item(0).src="../../images/bluedrop.gif";}
			}
	}
	else if(document.all(elemPos+incr).className=="cssDetailshow")
	{
		document.all(elemPos+incr).className="cssDetailhide"
		document.all(elemPos+1).src="../../images/blueup.gif";
		if(open.tagName=="IMG"){open.src="../../images/blueup.gif";}
		if(open.tagName=="B")
			{
			if(open.parentElement.all.tags("IMG").length != 0)
				{open.parentElement.all.tags("IMG").item(0).src="../../images/blueup.gif";}
			}
	}
	else
	{
		return;
	}
	event.cancelBubble = true;
//	open.scrollIntoView(true);
}

function ks_testParent(src,dest)
{
	//Search for a specific parent of the current element.
	while(src !=null)
	{
		if(src.tagName == dest)
		{
			return src;
		}
		src = src.parentElement;
	}
	return null;
}
