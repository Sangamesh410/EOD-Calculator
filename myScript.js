function Calculate()
{
  num1 = document.getElementById("SOD_Total").value;
  num2 = document.getElementById("SODRedOrange").value;
  num3 = document.getElementById("RedOrange_Handled").value;
  num4 = parseInt(num1) - parseInt(num2);
  num5x = document.getElementById("NonRedHandled").value;
  num5 = parseInt(num5x) - parseInt(num3);
  num6 = document.getElementById("EOD_Total").value;      
  document.getElementById("SOD_Total1").innerHTML = parseInt(num1);
  document.getElementById("SODRedOrange1").innerHTML= parseInt(num2);
  document.getElementById("RedOrange_Handled1").innerHTML = parseInt(num3);
  numx = parseInt(num2) - parseInt(num3)
  document.getElementById("EODRedOrange").innerHTML = parseInt(num2) - parseInt(num3);
  document.getElementById("SODNonRed1").innerHTML = parseInt(num4);
  document.getElementById("NonRedHandled1").innerHTML = parseInt(num5);
  num7 = parseInt(num3) + parseInt(num5);
  document.getElementById("Total_Handled").innerHTML = parseInt(num7);
  document.getElementById("EOD_Total1").innerHTML = parseInt(num6);
  num8 = parseInt(num1)-parseInt(num7)-parseInt(num6);
  document.getElementById("Incoming").innerHTML = Math.abs(num8); 
  numyy =  parseInt(num4)-parseInt(num5)+parseInt(Math.abs(num8));
  document.getElementById("EODNonRed").innerHTML = parseInt(num4)-parseInt(num5)+parseInt(Math.abs(num8));
  
  
  num11 = document.getElementById("S_SOD_Total").value;
  num22 = document.getElementById("S_SODRedOrange").value;
  num33 = document.getElementById("S_RedOrange_Handled").value;
  num44 = parseInt(num11) - parseInt(num22);
  num55x = document.getElementById("S_NonRedHandled").value;
  num55 = parseInt(num55x) - parseInt(num33);
  num66 = document.getElementById("S_EOD_Total").value;    
  
  document.getElementById("SOD_Total2").innerHTML = parseInt(num11);
  document.getElementById("SODRedOrange2").innerHTML= parseInt(num22);
  document.getElementById("RedOrange_Handled2").innerHTML = parseInt(num33);
  numxx = parseInt(num22) - parseInt(num33);
  document.getElementById("EODRedOrange1").innerHTML = parseInt(num22) - parseInt(num33);
  document.getElementById("SODNonRed2").innerHTML = parseInt(num44);
  document.getElementById("NonRedHandled2").innerHTML = parseInt(num55);
  num77 = parseInt(num33) + parseInt(num55);
  document.getElementById("Total_Handled1").innerHTML = parseInt(num77);
  document.getElementById("EOD_Total2").innerHTML = parseInt(num66);
  num88 = parseInt(num11)-parseInt(num77)-parseInt(num66);
  document.getElementById("Incoming1").innerHTML = Math.abs(num88); 
  numy = parseInt(num44)-parseInt(num55)+parseInt(Math.abs(num88)); 
  document.getElementById("EODNonRed1").innerHTML = parseInt(num44)-parseInt(num55)+parseInt(Math.abs(num88));
  
  document.getElementById("SOD_Total3").innerHTML = parseInt(num1)+parseInt(num11);
  document.getElementById("SODRedOrange3").innerHTML= parseInt(num2)+parseInt(num22);
  document.getElementById("RedOrange_Handled3").innerHTML = parseInt(num3)+parseInt(num33);
  document.getElementById("EODRedOrange3").innerHTML = parseInt(numx)+parseInt(numxx);
  document.getElementById("SODNonRed3").innerHTML = parseInt(num4)+parseInt(num44);
  document.getElementById("NonRedHandled3").innerHTML = parseInt(num5)+parseInt(num55);
  document.getElementById("Total_Handled3").innerHTML = parseInt(num7)+parseInt(num77);
  document.getElementById("EOD_Total3").innerHTML = parseInt(num6)+parseInt(num66);
  document.getElementById("Incoming3").innerHTML =  parseInt(Math.abs(num8))+parseInt(Math.abs(num88));
  document.getElementById("EODNonRed3").innerHTML = parseInt(numy)+parseInt(numyy);
  
}

function TriggerOutlook()
{        
	var s =  document.get;
    var body = 'body';     
	var d = new Date();
	var a = d.toString().substring(8,10);
	var b = d.toString().substring(4,7);
	var c = d.toString().substring(10,15);
    var subject = "Rogers OMS EOD Update || offshore || "+a+"th "+b+" "+c;
	window.location.href = "mailto:*SmartOps Rogers OMS OGS Team <SmartOpsRogersOMSOGSTeam@int.amdocs.com>; #RCI_Maestro_OMS_OGS <MaestroOMSOGS@rci.rogers.com>?cc=Girija Shankar Samantaray <girijas@amdocs.com>; Tatyana Satanovsky <Tatyana.Satanovsky@Amdocs.com>; Srikrishna Chytanya Nallapati <SNALLAPA@amdocs.com>; Kultar Jarial <KULTARJ@amdocs.com>&subject="+subject;  
} 

function selectElementContents(el) {
        var body = document.body, range, sel;
        if (document.createRange && window.getSelection) {
            range = document.createRange();
            sel = window.getSelection();
            sel.removeAllRanges();
            try {
                range.selectNodeContents(el);
                sel.addRange(range);
            } catch (e) {
                range.selectNode(el);
                sel.addRange(range);
            }
            document.execCommand("copy");

        } else if (body.createTextRange) {
            range = body.createTextRange();
            range.moveToElementText(el);
            range.select();
            range.execCommand("Copy");
        }
    }