function buttonClicked(){

    var country = document.getElementById("country_input").value;

    fetch(`http://universities.hipolabs.com/search?country=${country}`)
    .then((response) => response.json())
    .then((data) => {
        // nak choose random data daripada index 
            var temp=[];
            for (var i=0; i<data.length; i++){
                var temperory = Math.floor(Math.random()*data.length);
                if(temp.indexOf(temperory) == -1){
                    temp.push(temperory);
                } 
                else{
                    i--;   
                }
            }
        
        var nameone=data[temp[0]].name;
        var nametwo=data[temp[1]].name;
        var namethree=data[temp[2]].name;
        var namefour=data[temp[3]].name;
        var namefive=data[temp[4]].name;

        var unione=data[temp[0]].web_pages[0];
        var unitwo=data[temp[1]].web_pages[0];
        var unithree=data[temp[2]].web_pages[0];
        var unifour=data[temp[3]].web_pages[0];
        var unifive=data[temp[4]].web_pages[0];

        //output data to index
        document.querySelector(".nameone").innerText = nameone;
        document.querySelector(".nametwo").innerText = nametwo;
        document.querySelector(".namethree").innerText = namethree;
        document.querySelector(".namefour").innerText = namefour;
        document.querySelector(".namefive").innerText = namefive;

        document.querySelector(".unione").innerText = unione;
        document.querySelector(".unitwo").innerText = unitwo;
        document.querySelector(".unithree").innerText = unithree;
        document.querySelector(".unifour").innerText = unifour;
        document.querySelector(".unifive").innerText = unifive;

    });
}