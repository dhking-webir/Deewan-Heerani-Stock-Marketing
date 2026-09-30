
function showToast(message){

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(function(){

        toast.classList.remove("show");

    },2200);
}

function addWatch(stock){

    showToast(
        stock + " added to your watchlist!"
    );

}

function toggleMenu(){

    const nav =
        document.getElementById("navLinks");

    if(nav.style.display === "flex"){

        nav.style.display = "none";

    }else{

        nav.style.display = "flex";
        nav.style.position = "absolute";
        nav.style.top = "76px";
        nav.style.right = "5%";
        nav.style.flexDirection = "column";
        nav.style.gap = "18px";
        nav.style.background = "#0b0d0f";
        nav.style.padding = "20px";
        nav.style.borderRadius = "12px";
        nav.style.boxShadow =
            "0 15px 40px rgba(0,0,0,.4)";
    }

}

document.querySelectorAll("#navLinks a").forEach(function(link){

    link.addEventListener("click",function(){

        if(window.innerWidth <= 950){

            document.getElementById("navLinks")
            .style.display = "none";

        }

    });

});
