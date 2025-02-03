function openNav() {
    const iconNav = document.getElementById('iconNav');
    const body = document.getElementsByTagName('body')[0];
    const links = document.getElementsByClassName('links')[0];
    const user = document.getElementsByClassName('user')[0];

    this.nav =! this.nav;

    if (this.nav) {
        iconNav.src = 'assets/icons/i-xmark.svg';
        links.style.display = 'block';
        user.style.display = 'block';
        document.documentElement.style.overflow = 'hidden';
        document.body.scroll = "no"
    }
    else {
        iconNav.src = 'assets/icons/i-bars.svg';
        links.style.display = 'none';
        user.style.display = 'none';
        body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
        document.body.scroll = "yes"
    }

}