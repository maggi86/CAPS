<template>
<div class="contacts">
    <div class="container" >
        <div class="row">
            <div class="col mx-auto text-center" id="col">
                <h3>
                    Product and Order Queries
                </h3>
                <p>
                    Phone: +27 81 262 4254
                </p>
                <p>
                    Email: info@m-rings.co.za
                </p>
                <h6 class="mx-auto text-center">
                    From the time 10:00AM til 19:00PM our customer response team is working their best to reply and help you with your problems. Between 12:30PM til 13:20PM our customer service team will be on break so there will be a slight delay to your responses.
                </h6>
                <h5>
                    Refund/Return Info
                </h5>
                <p>
                    meagan@m-rings.co.za
                </p>
                <button>
                    Submit Return/Refund product 
                </button>
                <h5>
                    Custom Product Enquiries
                </h5>
                <p>
                    michaela@m-rings.co.za
                </p>
                <h5>
                    Address
                </h5>
                <p>
                    578 Castanova Road | Down Town | Jamaica
                </p>
                <p>
                    We're Open From 9:00AM til 17:00PM(Monday to Friday)
                </p>
                <p>
                    We're Open From 9:00AM til 15:00PM(Saturday)
                </p>
            </div>
            <div class="col">
                <form action="https://formspree.io/f/xnqrjzlo" method="post">
                <h5>
                    Message us 
                </h5>
                <div>
                    <label>
                        Name and Lastname: <span>(Required)</span>
                    </label>
                    <div class="row">
                       <input name="name">
                    </div>
                    
                </div>
                <div>
                    <label>
                        Email: <span>(Required)</span>
                    </label>
                    <div class="row">
                      <input name="email" placeholder="Eg: info@gmail.com">
                    </div>
                    
                </div>
                <div>
                    <label>
                        Phone: <span>(Required)</span>
                    </label>
                    <div class="row">
                        <input name="phone" placeholder="Eg: +27 12 346 7890">
                    </div>
                    
                </div>
                <div>
                    <label>
                        Message: 
                    </label>
                    <div class="row">
                        <input id="message" name="text" placeholder="Tell us your problem">
                    </div>
                    
                </div>
                <button type="submit">
                    Send
                </button>
            </form>
            </div>
    </div>
    </div>
</div>
</template>

<style scope>
.contacts{
    padding-top:50px;
}
span{
    color:gray;
    font-family:cursive;
    font-size:13px;
}
h6{
    width:400px;
    font-size:14px;
    font-weight:100;
}
label{
    font-size:20px
}
.row{
    margin-bottom:18px;
}
p{
    font-weight:200 
}
button{
    border-width:1px;
    height:40px;
    padding:5px;
    border-radius:5px;
    width:300px;
    margin-bottom:10px;
    font-size:13px;
    background-color:rgb(0, 0, 0);
    color:white;
}
button:hover{
    background-color:white;
    color:black
}
#message{
    height:200px
}
</style>