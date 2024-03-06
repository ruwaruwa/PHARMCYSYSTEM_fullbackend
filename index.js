const express= require('express');
const app= express();
const ConnectDB=require('./DB_Config/Connection');
ConnectDB();
const categorRoute=require('./')
const medicine=require('./Routers/Medicineroute')
const SELES=require('./Routers/Salesrout')
const Users=require('./Routers/UserRoute')
const login=require('./Routers/Loginroute');
const Reports=require('./Routers/ReporRouter')
const expense=require('./Routers/ExpenseRouters');
const cat_exp=require('./Routers/Catexprouter')
const authent=require('./AUthentications/middleware');
app.use(express.json());
//midleware

//
app.use('/category',categorRoute)
app.use('/store',medicine);
app.use('/seles',SELES);
app.use('/report',Reports)
app.use('/expense',expense)
app.use('/cat_expenses',cat_exp)
app.use('/users',authent(['admin']),Users)
app.use('/login',login)

app.get('/',(req,res)=>{
    res.send('server started !!')
});

app.listen(1000,async()=>{
    console.log('app started at port 100');

});