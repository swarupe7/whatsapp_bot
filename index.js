const qrCode = require('qrcode-terminal');
const {Client , LocalAuth } = require('whatsapp-web.js');

const whatsapp = new Client({
    authStrategy: new LocalAuth()
})

whatsapp.on('qr',qr =>(
    qrCode.generate(qr,{
        small:true
    })
));

whatsapp.on('message', async msg =>{
    if(msg.body === "hii"){
        msg.reply("Hi, This is swarup working as developer . \n you can enter the following commands to know more about me. \n /linkedin - To know my linkedin profile. \n /github - To know my Github profile .\n /portfolio - To know my portfolio " );
    }

    if(msg.body === '/linkedin' ){
        msg.reply("my profile: https://www.linkedin.com/in/jyothi-swarup-seethala/");
    }

    if(msg.body === '/github'){
        msg.reply("my profile: https://github.com/swarupe7")
    }

    if(msg.body === '/portfolio'){
        msg.reply("my website: https://port-nine-theta.vercel.app/")
    }

})

whatsapp.on('ready', ()=>{
    console.log('ready running');
})

whatsapp.initialize();