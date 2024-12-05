const exportbtn=document.querySelector("#btnExport");
const tableEl=document.querySelector("table");

class downloadcsv{
    constructor(table,header=true){
        this.table=table
        this.rows=Array.from(this.table.querySelectorAll("tr"));
        if(!header && this.rows[0].querySelectorAll("th").length){
            this.rows.shift();
        }
        console.log(this._getLengthrow());
    }

    _getLengthrow(){
        return this.rows.reduce((length,row)=>(
            row.childElementCount > length ? row.childElementCount : length  
        ),0);
    }

    exportCsv(){
        const lines=[];
        let ncols=this._getLengthrow();
        for (const row of this.rows) {
            let line=""
            for(let i=0;i<ncols;i++){
                if(row.children[i]!==undefined){
                    line+=downloadcsv.safedata(row.children[i]);
                    line+= i !== ncols-1 ? "," : "";
                }
            }
            lines.push(line);
        }
        return lines.join("\n");
    }

    static safedata(td){
        let Data=td.textContent;
        //replace " to ""
        //Data=Data.replace(/"/g,`""`);
        //replace , /n
        Data = /[",/n]/.test(Data) ? `${Data}` : Data;

        return Data;
    }
}


exportbtn.addEventListener("click",()=>{
    const obj=new downloadcsv(tableEl);
    const data=obj.exportCsv();
    const blob= new Blob([data],{ type: "text/csv" });
    let url=URL.createObjectURL(blob);
    const a=document.createElement("a");
    a.href=url;
    a.download="table.csv";
    a.click();

    setInterval(()=>{
        URL.revokeObjectURL(url);
    },500);
});