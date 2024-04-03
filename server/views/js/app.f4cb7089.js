(function(){"use strict";var e={6842:function(e,n,t){var o=t(9242),s=t(1020),a=t(3396),l=t(7139);const r={class:"navbar navbar-expand-md bg-body-tertiary"},i={class:"container-fluid"},u=(0,a._)("a",{class:"navbar-brand"},"FundMosque",-1),d=(0,a._)("span",{class:"navbar-toggler-icon"},null,-1),c=[d],m={class:"navbar-nav mx-auto"};function h(e,n,t,o,s,d){const h=(0,a.up)("router-link"),b=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("nav",r,[(0,a._)("div",i,[u,(0,a._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:n[0]||(n[0]=(...e)=>o.toggleNavbar&&o.toggleNavbar(...e))},c),(0,a._)("div",{class:(0,l.C_)(["collapse navbar-collapse",{show:o.isNavbarOpen}]),id:"navbarSupportedContent"},[(0,a._)("div",m,[(0,a.Wm)(h,{onClick:o.closeNavbar,to:"/",class:"nav-item nav-link"},{default:(0,a.w5)((()=>[(0,a.Uk)("Home")])),_:1},8,["onClick"]),o.user.isLoggedIn?((0,a.wg)(),(0,a.j4)(h,{key:0,onClick:o.closeNavbar,class:"nav-item nav-link",to:"/makeDonation"},{default:(0,a.w5)((()=>[(0,a.Uk)("Make a Donation")])),_:1},8,["onClick"])):(0,a.kq)("",!0),o.user.isLoggedIn?((0,a.wg)(),(0,a.j4)(h,{key:1,onClick:o.closeNavbar,class:"nav-item nav-link",to:"/profile"},{default:(0,a.w5)((()=>[(0,a.Uk)("View Profile")])),_:1},8,["onClick"])):(0,a.kq)("",!0),o.user.isLoggedIn?((0,a.wg)(),(0,a.j4)(h,{key:2,onClick:o.closeNavbar,class:"nav-item nav-link",to:"/mosquesInfo"},{default:(0,a.w5)((()=>[(0,a.Uk)("View Mosques")])),_:1},8,["onClick"])):(0,a.kq)("",!0),o.user.isLoggedIn&&o.user.isAdmin?((0,a.wg)(),(0,a.j4)(h,{key:3,onClick:o.closeNavbar,class:"nav-item nav-link",to:"/adminDashboard"},{default:(0,a.w5)((()=>[(0,a.Uk)("Admin Dashboard")])),_:1},8,["onClick"])):(0,a.kq)("",!0),o.user.isLoggedIn?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(h,{key:4,class:"nav-item nav-link",to:"/register",onClick:o.closeNavbar},{default:(0,a.w5)((()=>[(0,a.Uk)("Register")])),_:1},8,["onClick"])),o.user.isLoggedIn?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(h,{key:5,class:"nav-item nav-link",to:"login",onClick:o.closeNavbar},{default:(0,a.w5)((()=>[(0,a.Uk)("Login")])),_:1},8,["onClick"]))]),(0,a._)("button",{class:"btn btn-secondary",id:"darkModeButton",onClick:n[1]||(n[1]=(...e)=>o.toggleTheme&&o.toggleTheme(...e))},(0,l.zw)("dark"===o.theme?"Light Mode":"Dark Mode"),1)],2)])]),(0,a.Wm)(b)],64)}var b=t(4870),_=(t(560),t(2483));const p=(0,a._)("h1",null,"Donate",-1),g=(0,a._)("p",null,[(0,a.Uk)("Fill in the form below to make a donation "),(0,a._)("br"),(0,a.Uk)(" We thank you for your generosity!")],-1),f={class:"mb-3"},w=(0,a._)("label",{for:"amount"},"Amount",-1),v={class:"mb-3"},y=(0,a._)("label",{for:"mosque"},"Mosque",-1),k=(0,a._)("option",{value:"",disabled:"",selected:""},"Click here to select a mosque",-1),q=["value"],D=(0,a._)("button",{type:"submit",class:"btn btn-primary"},"Submit",-1);function M(e,n,t,s,r,i){return(0,a.wg)(),(0,a.iD)(a.HY,null,[p,g,(0,a._)("form",{onSubmit:n[2]||(n[2]=(0,o.iM)(((...e)=>i.submitDonation&&i.submitDonation(...e)),["prevent"]))},[(0,a._)("div",f,[w,(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"amount","aria-describedby":"amount","onUpdate:modelValue":n[0]||(n[0]=e=>r.amount=e),placeholder:"Enter Amount in £ here"},null,512),[[o.nr,r.amount]])]),(0,a._)("div",v,[y,(0,a.wy)((0,a._)("select",{id:"mosque",name:"mosque","onUpdate:modelValue":n[1]||(n[1]=e=>r.mosque=e),class:"form-control",required:""},[k,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.mosques,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e._id,value:e._id},(0,l.zw)(e.name),9,q)))),128))],512),[[o.bM,r.mosque]])]),D],32)],64)}var I={name:"DonationForm",data(){return{amount:"",donor:"",mosque:"",users:[],mosques:[]}},created(){fetch("/api/users").then((e=>{if(e.ok)return e.json();throw new Error(e.status)})).then((e=>{this.users=e})).catch((e=>{console.error(e)})),fetch("/api/mosques").then((e=>{if(e.ok)return e.json();throw new Error(e.status)})).then((e=>{this.mosques=e})).catch((e=>{console.error(e)}))},setup(){const e=xn();return{user:e}},methods:{submitDonation(){const e={amount:this.amount,donor:this.user._id,mosque:this.mosque};fetch("/api/donations",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify(e)}).then((e=>{if(e.ok)return e.json();throw new Error(e.status)})).then((()=>{alert("Donation successful"),On.push("/")})).catch((e=>{console.error(e),alert("Donation failed")}))}}},U=t(89);const C=(0,U.Z)(I,[["render",M]]);var j=C;const L={class:"home"},S=(0,a._)("h1",null,"Welcome to FundMosque!",-1),z={key:0},N={class:"logout"},O={key:0},x={key:0};function A(e,n,t,o,s,r){const i=(0,a.up)("DonationList");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",L,[S,o.user.isLoggedIn?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",z,"Please sign up or log in to continue."))]),(0,a._)("div",null,[(0,a._)("div",N,[o.user.isLoggedIn?((0,a.wg)(),(0,a.iD)("p",O,"You are logged in as "+(0,l.zw)(o.user.username),1)):(0,a.kq)("",!0),o.user.isLoggedIn?((0,a.wg)(),(0,a.iD)("button",{key:1,class:"btn btn-primary",onClick:n[0]||(n[0]=(...e)=>o.user.logout&&o.user.logout(...e))},"Log Out")):(0,a.kq)("",!0)])]),o.user.isLoggedIn?((0,a.wg)(),(0,a.iD)("div",x,[(0,a.Wm)(i)])):(0,a.kq)("",!0)],64)}const E=e=>((0,a.dD)("data-v-7bff4c92"),e=e(),(0,a.Cn)(),e),P={class:"donation-list"},T=E((()=>(0,a._)("h1",null,"Recent Donations",-1))),H={class:"table"},Y=E((()=>(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"Amount"),(0,a._)("th",null,"Donor"),(0,a._)("th",null,"Mosque")])],-1)));function F(e,n,t,o,s,r){return(0,a.wg)(),(0,a.iD)("div",P,[T,(0,a._)("table",H,[Y,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.donations,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e._id},[(0,a._)("td",null,(0,l.zw)(e.amount),1),(0,a._)("td",null,(0,l.zw)(e.donor.name),1),(0,a._)("td",null,(0,l.zw)(e.mosque.name),1)])))),128))])])])}var V={name:"DonationList",data(){return{donations:[]}},created(){fetch("/api/donations").then((e=>{if(e.ok)return e.json();throw new Error(e.status)})).then((e=>{this.donations=e,this.donations.reverse(),this.donations=this.donations.slice(0,3)})).catch((e=>{console.error(e)}))}};const Z=(0,U.Z)(V,[["render",F],["__scopeId","data-v-7bff4c92"]]);var K=Z,W={name:"HomePage",components:{DonationList:K},setup(){const e=xn();return{user:e}}};const J=(0,U.Z)(W,[["render",A]]);var R=J;const $=(0,a._)("h1",null,"Register",-1),B={class:"mb-3"},G=(0,a._)("label",{for:"username",class:"form-label"},"Username",-1),Q={class:"mb-3"},X=(0,a._)("label",{for:"name",class:"form-label"},"Full Name",-1),ee={class:"mb-3"},ne=(0,a._)("label",{for:"email",class:"form-label"},"Email address",-1),te={class:"mb-3"},oe=(0,a._)("label",{for:"password",class:"form-label"},"Password",-1),se=(0,a._)("button",{class:"btn btn-primary",type:"submit"},"Register",-1);function ae(e,n,t,s,l,r){return(0,a.wg)(),(0,a.iD)(a.HY,null,[$,(0,a._)("form",{onSubmit:n[4]||(n[4]=(0,o.iM)(((...e)=>r.register&&r.register(...e)),["prevent"])),class:"register-form"},[(0,a._)("div",B,[G,(0,a.wy)((0,a._)("input",{class:"form-control","onUpdate:modelValue":n[0]||(n[0]=e=>l.username=e),type:"text",required:""},null,512),[[o.nr,l.username]])]),(0,a._)("div",Q,[X,(0,a.wy)((0,a._)("input",{class:"form-control","onUpdate:modelValue":n[1]||(n[1]=e=>l.name=e),type:"text",required:""},null,512),[[o.nr,l.name]])]),(0,a._)("div",ee,[ne,(0,a.wy)((0,a._)("input",{class:"form-control","onUpdate:modelValue":n[2]||(n[2]=e=>l.email=e),type:"email",required:""},null,512),[[o.nr,l.email]])]),(0,a._)("div",te,[oe,(0,a.wy)((0,a._)("input",{class:"form-control","onUpdate:modelValue":n[3]||(n[3]=e=>l.password=e),type:"password",required:""},null,512),[[o.nr,l.password]])]),se],32)],64)}var le={data(){return{username:"",name:"",email:"",password:""}},methods:{async register(){try{const e=await fetch("/api/register",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.username,name:this.name,email:this.email,password:this.password})}),n=await e.json();n.success?(this.$router.push("/"),alert("Registration successful")):alert("uh oh, try again!")}catch(e){console.log(e),alert("Registration failed")}}}};const re=(0,U.Z)(le,[["render",ae]]);var ie=re;const ue={class:"login"},de=(0,a._)("h1",null,"Login",-1),ce={class:"mb-3"},me=(0,a._)("label",{class:"form-label",for:"username"},"Username",-1),he={class:"mb-3"},be=(0,a._)("label",{class:"form-label",for:"password"},"Password",-1),_e=(0,a._)("button",{class:"btn btn-primary",type:"submit"},"Login",-1);function pe(e,n,t,s,l,r){return(0,a.wg)(),(0,a.iD)("div",ue,[de,(0,a._)("form",{onSubmit:n[2]||(n[2]=(0,o.iM)(((...e)=>r.login&&r.login(...e)),["prevent"])),class:"login-form"},[(0,a._)("div",ce,[me,(0,a.wy)((0,a._)("input",{id:"username",class:"form-control",type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>s.userStore.username=e),required:""},null,512),[[o.nr,s.userStore.username]])]),(0,a._)("div",he,[be,(0,a.wy)((0,a._)("input",{id:"password",class:"form-control",type:"password","onUpdate:modelValue":n[1]||(n[1]=e=>s.userStore.password=e),required:""},null,512),[[o.nr,s.userStore.password]])]),_e],32)])}var ge={name:"LoginPage",setup(){const e=xn();return{userStore:e}},methods:{login(){this.userStore.login(),this.userStore.username="",this.userStore.password=""}}};const fe=(0,U.Z)(ge,[["render",pe]]);var we=fe;const ve=(0,a._)("h1",null,"Profile",-1),ye=(0,a._)("p",null,[(0,a.Uk)(" Below are the details stored by FundMosque for this account. "),(0,a._)("br"),(0,a.Uk)(" Click the update button to update your details ")],-1),ke=(0,a._)("button",{class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#exampleModal"}," Update ",-1),qe={class:"donation-table"},De={class:"table"},Me=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"Amount"),(0,a._)("th",null,"Mosque")])],-1),Ie={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Ue={class:"modal-dialog"},Ce={class:"modal-content"},je=(0,a._)("div",{class:"modal-header"},[(0,a._)("h1",{class:"modal-title fs-5",id:"exampleModalLabel"}," Update user info here "),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Le={class:"modal-body"},Se={class:"mb-3"},ze=(0,a._)("label",{for:"username",class:"form-label"},"Username (cannot be changed)",-1),Ne={class:"mb-3"},Oe=(0,a._)("label",{for:"name",class:"form-label"},"Full Name",-1),xe={class:"mb-3"},Ae=(0,a._)("label",{for:"email",class:"form-label"},"Email address",-1),Ee=(0,a._)("button",{class:"btn btn-primary",type:"submit","data-bs-dismiss":"modal"}," Update ",-1);function Pe(e,n,t,s,r,i){return(0,a.wg)(),(0,a.iD)(a.HY,null,[ve,ye,(0,a._)("h3",null,"Name: "+(0,l.zw)(s.user.name),1),(0,a._)("h3",null,"Username: "+(0,l.zw)(s.user.username),1),(0,a._)("h3",null,"Email: "+(0,l.zw)(s.user.email),1),ke,(0,a._)("div",qe,[(0,a._)("table",De,[Me,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.donations,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e._id},[(0,a._)("td",null,(0,l.zw)(e.amount),1),(0,a._)("td",null,(0,l.zw)(e.mosque.name),1)])))),128))])])]),(0,a._)("div",Ie,[(0,a._)("div",Ue,[(0,a._)("div",Ce,[je,(0,a._)("div",Le,[(0,a._)("form",{onSubmit:n[3]||(n[3]=(0,o.iM)((e=>i.update(s.user._id)),["prevent"])),class:"register-form"},[(0,a._)("div",Se,[ze,(0,a.wy)((0,a._)("input",{class:"form-control","onUpdate:modelValue":n[0]||(n[0]=e=>s.user.username=e),type:"text",disabled:"",required:""},null,512),[[o.nr,s.user.username]])]),(0,a._)("div",Ne,[Oe,(0,a.wy)((0,a._)("input",{class:"form-control","onUpdate:modelValue":n[1]||(n[1]=e=>s.user.name=e),type:"text",required:""},null,512),[[o.nr,s.user.name]])]),(0,a._)("div",xe,[Ae,(0,a.wy)((0,a._)("input",{class:"form-control","onUpdate:modelValue":n[2]||(n[2]=e=>s.user.email=e),type:"email",required:""},null,512),[[o.nr,s.user.email]])]),Ee],32)])])])])],64)}var Te={name:"ProfilePage",setup(){const e=xn();return{user:e}},data(){return{donations:[]}},created(){fetch(`/api/userDonations/${this.user._id}`).then((e=>{if(e.ok)return e.json()})).then((e=>{this.donations=e}))},methods:{async update(e){fetch(`/api/users/${e}`,{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.user)}).then((e=>{if(!e.ok)throw e;return e.json()})).then((e=>{if(!e.success)throw new Error(e.message||"Failed to update user");alert("User updated successfully!")})).catch((e=>{alert(`uh oh, theres a problem\n${e.status}: ${e.statusText}`)}))}}};const He=(0,U.Z)(Te,[["render",Pe]]);var Ye=He;const Fe={class:"mosque-list"},Ve=(0,a._)("h1",null,"Mosques",-1),Ze=(0,a._)("p",null,[(0,a.Uk)(" Below are the mosques registered with FundMosque."),(0,a._)("br"),(0,a.Uk)(" Click More Info to find out more ")],-1),Ke={class:"table"},We=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"Mosque Name"),(0,a._)("th",null,"Mosque Address"),(0,a._)("th",null,"Action")])],-1),Je=["onClick"],Re={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},$e={class:"modal-dialog modal-dialog-scrollable"},Be={class:"modal-content"},Ge=(0,a._)("div",{class:"modal-header"},[(0,a._)("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"More information about: "),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Qe={class:"modal-body"},Xe={class:"table"},en=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"Amount"),(0,a._)("th",null,"Donor")])],-1),nn=(0,a._)("div",{class:"modal-footer"},[(0,a._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ")],-1);function tn(e,n,t,o,s,r){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",Fe,[Ve,Ze,(0,a._)("table",Ke,[We,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.mosques,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e._id},[(0,a._)("td",null,(0,l.zw)(e.name),1),(0,a._)("td",null,(0,l.zw)(e.address),1),(0,a._)("td",null,[(0,a._)("button",{class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#exampleModal",onClick:n=>r.mosqueMoreInfo(e._id,e.name)}," More Info ",8,Je)])])))),128))])])]),(0,a._)("div",Re,[(0,a._)("div",$e,[(0,a._)("div",Be,[Ge,(0,a._)("div",Qe,[(0,a._)("h2",null,(0,l.zw)(this.selectedMosque),1),(0,a._)("p",null,"The total donations since joining FundMosque for "+(0,l.zw)(s.selectedMosque)+" is: £"+(0,l.zw)(s.totalMosqueDonations)+"!",1),(0,a._)("table",Xe,[en,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.mosqueDonations,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e._id},[(0,a._)("td",null,(0,l.zw)(e.amount),1),(0,a._)("td",null,(0,l.zw)(e.donor.name),1)])))),128))])])]),nn])])])],64)}var on={name:"MosquesPage",data(){return{mosques:[],selectedMosque:"",mosqueDonations:[],totalMosqueDonations:0}},mounted(){fetch("/api/mosques/").then((e=>{if(e.ok)return e.json();throw new Error(e.status)})).then((e=>{this.mosques=e})).catch((e=>{console.error(e)}))},methods:{mosqueMoreInfo(e,n){this.selectedMosque=n,fetch(`/api/mosqueAllDonations/${e}`).then((e=>{if(e.ok)return e.json();throw new Error(e.status)})).then((e=>{this.mosqueDonations=e,this.totalMosqueDonations=0;for(let n=0;n<this.mosqueDonations.length;n++)this.totalMosqueDonations+=this.mosqueDonations[n].amount})).catch((e=>{console.error(e)}))}}};const sn=(0,U.Z)(on,[["render",tn]]);var an=sn;const ln={class:"users-table"},rn=(0,a._)("h1",null,"Admin Dashboard",-1),un=(0,a._)("h2",null,"Users",-1),dn={class:"table-responsive"},cn={class:"table"},mn=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"ID"),(0,a._)("th",null,"Username"),(0,a._)("th",null,"Full Name"),(0,a._)("th",null,"Email")])],-1),hn=(0,a._)("h2",null,"Mosques",-1),bn={class:"table-responsive"},_n={class:"table"},pn=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"ID"),(0,a._)("th",null,"Name"),(0,a._)("th",null,"Address"),(0,a._)("th",null,"Contact")])],-1),gn=(0,a._)("h2",null,"Donations",-1),fn={class:"table-responsive"},wn={class:"table"},vn=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"ID"),(0,a._)("th",null,"Amount"),(0,a._)("th",null,"Donor Name"),(0,a._)("th",null,"Mosque")])],-1);function yn(e,n,t,o,s,r){return(0,a.wg)(),(0,a.iD)("div",ln,[rn,un,(0,a._)("div",dn,[(0,a._)("table",cn,[mn,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.users,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e._id},[(0,a._)("td",null,(0,l.zw)(e._id),1),(0,a._)("td",null,(0,l.zw)(e.username),1),(0,a._)("td",null,(0,l.zw)(e.name),1),(0,a._)("td",null,(0,l.zw)(e.email),1)])))),128))])])]),hn,(0,a._)("div",bn,[(0,a._)("table",_n,[pn,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.mosques,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e._id},[(0,a._)("td",null,(0,l.zw)(e._id),1),(0,a._)("td",null,(0,l.zw)(e.name),1),(0,a._)("td",null,(0,l.zw)(e.address),1),(0,a._)("td",null,(0,l.zw)(e.contact),1)])))),128))])])]),gn,(0,a._)("div",fn,[(0,a._)("table",wn,[vn,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.donations,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e._id},[(0,a._)("td",null,(0,l.zw)(e._id),1),(0,a._)("td",null,(0,l.zw)(e.amount),1),(0,a._)("td",null,(0,l.zw)(e.donor.name),1),(0,a._)("td",null,(0,l.zw)(e.mosque.name),1)])))),128))])])])])}var kn={name:"AdminDashboard",data(){return{users:[],mosques:[],donations:[]}},created(){fetch("/api/users").then((e=>{if(e.ok)return e.json();throw new Error(e.status)})).then((e=>{this.users=e})).catch((e=>{console.error(e)})),fetch("/api/mosques").then((e=>{if(e.ok)return e.json();throw new Error(e.status)})).then((e=>{this.mosques=e})).catch((e=>{console.error(e)})),fetch("/api/donations").then((e=>{if(e.ok)return e.json();throw new Error(e.status)})).then((e=>{this.donations=e})).catch((e=>{console.error(e)}))}};const qn=(0,U.Z)(kn,[["render",yn]]);var Dn=qn;const Mn=(0,a._)("h1",null,"Uh Oh",-1),In=(0,a._)("h2",null,"Looks like that page doesn't exist!",-1),Un=(0,a._)("p",null,"Navigate back to home to try again",-1);function Cn(e,n){return(0,a.wg)(),(0,a.iD)(a.HY,null,[Mn,In,Un],64)}const jn={},Ln=(0,U.Z)(jn,[["render",Cn]]);var Sn=Ln;const zn=[{path:"/",name:"home",component:R},{path:"/makeDonation",name:"donationForm",component:j,beforeEnter:(e,n,t)=>{const o=xn();o.isLoggedIn?t():t({name:"home"})}},{path:"/profile",name:"profile",component:Ye,beforeEnter:(e,n,t)=>{const o=xn();o.isLoggedIn?t():t({name:"home"})}},{path:"/mosquesInfo",name:"mosquesInfo",component:an,beforeEnter:(e,n,t)=>{const o=xn();o.isLoggedIn?t():t({name:"home"})}},{path:"/adminDashboard",name:"adminDashboard",component:Dn,beforeEnter:(e,n,t)=>{const o=xn();o.isAdmin?t():t({name:"home"})}},{path:"/register",name:"register",component:ie,beforeEnter:(e,n,t)=>{const o=xn();o.isLoggedIn?t({name:"home"}):t()}},{path:"/login",name:"login",component:we,beforeEnter:(e,n,t)=>{const o=xn();o.isLoggedIn?t({name:"home"}):t()}},{path:"/:catchAll(.*)",component:Sn}],Nn=(0,_.p7)({history:(0,_.PO)("/"),routes:zn});var On=Nn;const xn=(0,s.Q_)("user",{state:()=>{const e=localStorage.getItem("user");return e?JSON.parse(e):{_id:0,username:"",name:"",email:"",password:"",isAdmin:!1,isLoggedIn:!1}},actions:{async loggedIn(){try{const e=await fetch("/api/loggedIn",{method:"GET",credentials:"include"}),n=await e.json();n.success?(this._id=n._id,this.isLoggedIn=!0,this.username=n.username,this.name=n.name,this.email=n.email,this.isAdmin=n.isAdmin):this.isLoggedIn=!1}catch(e){console.log(e)}},async logout(){const e=await fetch("/api/logout",{method:"GET",credentials:"include"}),n=await e.json();n.success&&(this._id=0,this.username="",this.name="",this.email="",this.password="",this.isLoggedIn=!1,this.isAdmin=!1)},async login(){try{const e=await fetch("/api/login",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.username,password:this.password})});if(401===e.status)alert("Wrong Username or Password"),On.push("/login");else{const n=await e.json();n.success&&(alert("Login successful"),this._id=n._id,this.username=n.username,this.name=n.name,this.email=n.email,this.isAdmin=n.isAdmin,this.loggedIn(),On.push("/"))}}catch(e){console.log(e)}}}});var An={setup(){const e=xn(),n=(0,b.iH)(!1),t=(0,b.iH)(""),o=()=>{n.value=!n.value},s=()=>{n.value=!1},l=()=>{t.value="dark"===t.value?"light":"dark",localStorage.setItem("theme",t.value),r()},r=()=>{const e="dark"===t.value?"dark":"light";document.body.setAttribute("data-bs-theme",e)};return(0,a.bv)((()=>{e.loggedIn(),t.value=localStorage.getItem("theme")||"dark",r()})),{user:e,isNavbarOpen:n,theme:t,toggleNavbar:o,closeNavbar:s,toggleTheme:l}}};const En=(0,U.Z)(An,[["render",h]]);var Pn=En;t(2166);const Tn=(0,s.WB)();(0,o.ri)(Pn).use(On).use(Tn).mount("#app");const Hn=xn();(0,a.YP)(Hn,(e=>{localStorage.setItem("user",JSON.stringify(e))}),{deep:!0})}},n={};function t(o){var s=n[o];if(void 0!==s)return s.exports;var a=n[o]={exports:{}};return e[o].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,s,a){if(!o){var l=1/0;for(d=0;d<e.length;d++){o=e[d][0],s=e[d][1],a=e[d][2];for(var r=!0,i=0;i<o.length;i++)(!1&a||l>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[i])}))?o.splice(i--,1):(r=!1,a<l&&(l=a));if(r){e.splice(d--,1);var u=s();void 0!==u&&(n=u)}}return n}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,s,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var s,a,l=o[0],r=o[1],i=o[2],u=0;if(l.some((function(n){return 0!==e[n]}))){for(s in r)t.o(r,s)&&(t.m[s]=r[s]);if(i)var d=i(t)}for(n&&n(o);u<l.length;u++)a=l[u],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(d)},o=self["webpackChunkclient"]=self["webpackChunkclient"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(6842)}));o=t.O(o)})();
//# sourceMappingURL=app.f4cb7089.js.map