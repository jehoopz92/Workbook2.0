function exportMe() {
    var date = new Date.today().add(1).days().toString('M/d/yyyy');
    var trucks = document.getElementById('trucks').value;
    var stops = document.getElementById('stops').value;
    var piece = document.getElementById('piece').value;
    var average = roundDown((stops) / trucks, 2);
   window.location=('mailto:rsanchez@uste3.com;bsaiz@uste3.com;eri.delgado@conns.com;albuquerque.csr@conns.com;albuquerque.warehouse@conns.com;brenda.luna@conns.com;jhurley@uste3.com;aleplatt@uste3.com;jemery@uste3.com;spowell@uste3.com?Subject=Conns Albuquerque Export for '+date+' with an average of '+average+'&body=Albuquerque has been exported with '+trucks+' trucks, '+stops+' stops and '+piece+' pieces. Please refresh DT and let me know when drivers are assigned, thank you!');
    roundDown();
}

function roundDown(number, decimals) {
    decimals = decimals || 0;
    return (Math.floor(number * Math.pow(10, decimals)) / Math.pow(10, decimals));
}

function unresolved() {
    var date = new Date.today().add(1).days().toString('M/d/yyyy');
    var test = document.getElementById('test').value;
    window.location=('mailto:rsanchez@uste3.com;bsaiz@uste3.com;eri.delgado@conns.com;albuquerque.csr@conns.com;albuquerque.warehouse@conns.com;brenda.luna@conns.com;crystal.welch@conns.com;jhurley@uste3.com;aleplatt@uste3.com;jemery@uste3.com;spowell@uste3.com?subject=Conns Albuquerque Unresolved Address '+date+'&body= Good Evening, we are unable to locate the following address for the following order numbers '+test+'.  Could someone reach out to the customer and let us know where to pin this stop on the map? Cross streets, name of the subdivision or apartment complex are the most helpful identifiers but any sort of directions would help.');
}

function notification() {
    var date = new Date.today().add(0).days().toString('M/d/yyyy');
   window.location=('mailto:rsanchez@uste3.com;bsaiz@uste3.com;mott@uste3.com;jmoreno@uste3.com;swells@uste3.com;khazelton@uste3.com;spowell@uste3.com;connsrouting@uste3.com?subject='+date+'&body= ');
}

function ustonly() {
    var date = new Date.today().add(0).days().toString('M/d/yyyy');
   window.location=('mailto:rsanchez@uste3.com;bsaiz@uste3.com;jhurley@uste3.com;aleplatt@uste3.com;jemery@uste3.com;spowell@uste3.com?subject='+date+'&body= ');
}

function truckcount() {
    var date = new Date.today().add(1).days().toString('M/d/yyyy');
   window.location=('mailto:rsanchez@uste3.com;bsaiz@uste3.com;jhurley@uste3.com;aleplatt@uste3.com;jemery@uste3.com;spowell@uste3.com?subject= Truck Count for '+date+'&body= Can someone please confrim the number of trucks available for tomorrow? Thank you! ');
}

function zipmismatch() {
    var date = new Date.today().add(1).days().toString('M/d/yyyy');
  window.location=('mailto:rsanchez@uste3.com;bsaiz@uste3.com;eri.delgado@conns.com;albuquerque.csr@conns.com;albuquerque.warehouse@conns.com;brenda.luna@conns.com;crystal.welch@conns.com;jhurley@uste3.com;aleplatt@uste3.com;jemery@uste3.com;spowell@uste3.com?subject=Conns Albuquerque Zip Code Mismatch '+date+'&body= Good Evening, Invoice  is coming up as a zip code mismatch. On the ticket it is placed in zip code  . DT is suggesting it be placed in zip code  . Can someone reach out to the customer to confrim which zip code is correct? Thank you!');
}

function otd1() {
    var date = new Date.today().add(0).days().toString('M/d/yyyy');
  window.location=('mailto:rsanchez@uste3.com;bsaiz@uste3.com;mott@uste3.com;jmoreno@uste3.com;swells@uste3.com;spowell@uste3.com;khazelton@uste3.com;connsrouting@uste3.com?subject= Albuquerque - 9:30 - '+date+'&body= ');
}

function otd2() {
    var date = new Date.today().add(0).days().toString('M/d/yyyy');
  window.location=('mailto:rsanchez@uste3.com;bsaiz@uste3.com;mott@uste3.com;jmoreno@uste3.com;swells@uste3.com;spowell@uste3.com;khazelton@uste3.com;connsrouting@uste3.com?subject= Albuquerque - 10:30 - '+date+'&body= ');
}




function checkScroll() {
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if ($(window).scrollTop() > startY) {
        $('.navbar').addClass("scrolled");
    } else {
        $('.navbar').removeClass("scrolled");
    }
}

if ($('.navbar').length > 0) {
    $(window).on("scroll load resize", function () {
        checkScroll();
    });
}