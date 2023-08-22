module.exports = {
    categoryList : ['School', 'Inter', 'Btech', 'Cheddy dosth', 'Cakewala', 'colleague', 'Relative', 'Friend', 'Other'],
    message: (userData, domain) => {
        const msgs = {
            1: `Hey ${userData?.userName}${userData?.alias ? ` ${userData?.alias}` : ''},

            Hope you are doing well 😊
            
            Come and Join us Without a Fail 😊
            
            Don't avoid attending by giving lame excuses 😐
            
            We are waiting for your presence 😊
            
            Let's Dress up well and come to the below mentioned Address tomorrow 🤩
            
            15/149-1, Pedda Bestha Street, Kadapa,
            
            https://maps.app.goo.gl/b7rYWnyveDpfRvch6
            
            THANK YOU 😊
            

            From
            Marella Family 😊

            ------
             
            మీరు బాగా చేస్తున్నారని ఆశిస్తున్నాను 😊
            
            తప్పకుండా వచ్చి మాతో చేరండి 😊
            
            కుంటి సాకులు చెబుతూ హాజరు కాకుండా ఉండకండి 😐
            
            మేము మీ ఉనికి కోసం ఎదురు చూస్తున్నాము 😊
            
            చక్కగా డ్రెస్ చేసుకొని రేపు 🤩 క్రింద పేర్కొన్న చిరునామాకు రండి
            
            15/149-1, పెద్ద బెస్త వీధి, కడప
            
            https://maps.app.goo.gl/b7rYWnyveDpfRvch6
            
            ధన్యవాదాలు 😊
            
            నుండి
            మారెల్లా కుటుంబం 😊`,
            2: `Hey ${userData?.userName}${userData?.alias ? ` ${userData?.alias}` : ''},
            
            Hope you Remember ☺️.
            
            Otherwise I will come up with My SMS Reminder ☺️
            
            Come as our Guest ☺️
            Have a Feast ☺️
            Give us a Visual Treat ☺️
            
            THANK YOU ☺️
            
            From 
            Marella Family ☺️
            
            ------- 🙏 -------
            
            మీరు గుర్తుంచుకుంటారని ఆశిస్తున్నాను ☺️.
            
            లేకపోతే నేను నా SMS రిమైండర్‌తో వస్తాను ☺️
            
            మా అతిథిగా రండి ☺️
            విందు చేసుకోండి ☺️
            మాకు విజువల్ ట్రీట్ ఇవ్వండి ☺️
            
            ధన్యవాదాలు ☺️
            
            నుండి
            మారెల్లా కుటుంబం ☺️
            `,
            3: `Hey ${userData?.userName}${userData?.alias ? ` ${userData?.alias}` : ''},
             
            This is to ensure that I have invited you for my house warming ☺️.
            
            Click here to see the invitation card
            
            Will you forget? No worries. It's my obligation to remind you about it through SMS ☺️.
            
            Do Attend. Let your presence Appends much Happiness to us ☺️
            
            THANK YOU ☺️
            
            From 
            Marella Family ☺️
            
            ------------ 🙏 -------------- 
            
            ఇది నేను మిమ్మల్ని నా హౌస్ వార్మింగ్ కోసం ఆహ్వానించినట్లు నిర్ధారించుకోవడం కోసం ☺️.
            
            ఆహ్వాన కార్డును చూడటానికి ఇక్కడ క్లిక్ చేయండి

            ${domain}/invitation.jpeg
            
            మరిచిపోతారా? కంగారుపడవద్దు. దాని గురించి మీకు SMS ద్వారా గుర్తు చేయడం నా బాధ్యత.
            
            హాజరు అవ్వండి. మీ ఉనికి మాకు చాలా సంతోషాన్ని ఇస్తుంది ☺️
            
            ధన్యవాదాలు ☺️
            
            నుండి
            మారెల్లా కుటుంబం ☺️`,
        }
        return msgs[userData?.daysLeft]
    }
}