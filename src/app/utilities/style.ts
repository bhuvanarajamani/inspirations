export class Style {
    constructor(){}

    getFont(){
        var fonts: string[] = ['Roboto Slab', 'Open Sans', 'Yellowtail','Lobster','Risque','Audiowide','Playball','Coda','Coiny'];
        return fonts[Math.floor(Math.random() * fonts.length)];
    }
}
