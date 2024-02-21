function showCloseSubmenu(){
    document.getElementById('subNavbar').classList.toggle('hidden');
    if(!document.getElementById('subNavbar').classList.contains('hidden')){
        document.getElementById('invoice').classList.add('text-white','bg-navhover');
    } else {
        document.getElementById('invoice').classList.remove('text-white','bg-navhover');
    }
}

function isHidden() {
    if(!document.getElementById('subNavbar').classList.contains('hidden')){
        document.getElementById('subNavbar').classList.toggle('hidden');
        document.getElementById('invoice').classList.remove('text-white','bg-navhover');
    }
}

function showCloseMenu(){
    document.getElementById('mainNavbar').classList.toggle('hidden');
    document.getElementById('searchInput').classList.toggle('hidden');
    document.getElementById('companyId').classList.toggle('hidden');
    document.getElementById('pageHeader').classList.toggle('hidden');
    document.getElementById('menuHeader').classList.toggle('hidden');
}