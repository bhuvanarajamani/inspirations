export class Style {
    constructor(){}
    /*
    getBgColor(){
        var colors: string[] = ['#7878A1', '#7894A1', '#A18078'];
        return colors[Math.floor(Math.random() * colors.length)];
        //return "#"+((1<<24)*Math.random()|0).toString(16);
    }
    getFontColor(){
        var fontcolors: string[] = ['#AACCFF', '#A8FFC5', '#FFA8DC', '#FFFFFF'];
        return fontcolors[Math.floor(Math.random() * fontcolors.length)];
        //return "#"+((1<<24)*Math.random()|0).toString(16);
    }*/

    getFont(){
        var fonts: string[] = ['Roboto Slab', 'Open Sans', 'Yellowtail','Lobster','Risque','Audiowide','Playball','Coda','Coiny'];
        /*
        var copy = fonts.slice(0);
        if (copy.length < 1) { copy = fonts.slice(0); }
        var index = Math.floor(Math.random() * copy.length);
        var fontName = copy[index];
        copy.splice(index, 1);
        return fontName;
        */
        return fonts[Math.floor(Math.random() * fonts.length)];
    }
}
