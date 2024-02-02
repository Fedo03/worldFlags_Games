import React from "react";
import { useState, useEffect } from "react";
import {
    SafeAreaView,
    View,
    Text,
    Alert,
    Image,
    StyleSheet,
    ScrollView
} from "react-native";
import Path from "../comp/paths";

import Country from "../comp/countrys";

import Button from "../comp/button"

const counObj = new Country;
var cryNo = 0

var path = new Path

const Play = () => {

    

    console.log("started over")

    
    var countrys = counObj.rand(cryNo)
   
   
    
    const [arr, setArr] = useState(countrys.names)
   const [nameC,setNameC] = useState(countrys.result)
   const [answer, setAnswer] = useState(countrys.num)
   const [selected , setSelected] = useState(0)
   
   

    if(path.find(c => c.name == nameC)) {
        console.log("Same same")
    } else {
        console.log("but different")
    }
 
   var img = path.find(c => c.name == nameC)
   
 
   var paths =  img.path
  

    
function select(index,letter){
    setSelected(index)
   if(letter !== ""){
    let newArr = [...arr]
    newArr.push(letter)
    setArr(newArr)
 
    let newAns = [...answer]
    newAns[index] = "";
    setAnswer(newAns)

    
   }

}

    

   function butClick(letter,indexs){

    var sV = answer[selected]
    

    if( sV !== "") {
        let newArr = [...arr]
    newArr.push(sV)
    setArr(newArr)

    let newAns = [...answer]
    newAns[selected] = letter ;
    setAnswer(newAns)
          
    } else {

  
    const newAns = [...answer]
    newAns[selected] = letter;
    setAnswer(newAns)
    
    }
    setArr(old => old.filter((_,index)=> index !== indexs))

  


    const count = countrys.num

    console.log("selected number " + selected + "   "+ count.length)
    
    if(selected == (count.length - 1)){
        setSelected(0)
       

    } else {
    var newS = selected + 1
    setSelected(newS)

    }
   
   
    
   }

   useEffect(() => {

    var str = answer.join('')

    if(str == nameC){
   

       cryNo += 1
        countrys = counObj.rand(cryNo)
       
      
       
        setNameC(countrys.result)
        setAnswer(countrys.num)
        setSelected(0)
        setArr(countrys.names)

     
        
    }
         
   },[arr])


    return ( 
        <SafeAreaView>
            <View>
            <Image source={paths}
            style={styl.img} />

            </View>

              
            <View style={styl.con}>
                <ScrollView horizontal={true}>
                
             {
                answer.map((item,index) => {
                   return (
                     <Button title={item} txtSty={styl.emt} onClick={()=> select(index,item)}/>
                   )
                })
             }
             </ScrollView>
            </View>

            <View style={styl.con}>
            <ScrollView horizontal={true}>
                {
                    arr.map((item,index)=> {
                        
                       return ( 
                        <Button title={item} onClick={() => {
                            
                             butClick(item,index)

                        }} 
                        txtSty={styl.txt}/>
                        )

                        
                        
                    })
                }
             </ScrollView>
            </View>

            
        </ SafeAreaView>
    )
} 

const styl  = StyleSheet.create({
    con : {
        flexDirection : 'row',
       
    },

    txt : {
        color:"black", 
        backgroundColor : "yellow",
        height: 35,
        width: 25, 
        margin : 7,
        fontSize: 20,
        textAlign: "center",
        fontWeight : 'bold'
    },

    emt : {
        backgroundColor : "rgb(200,200,200)",
        height: 35,
        width: 25, 
        margin : 7,
        color : "black",
        textAlign: "center",
        fontSize: 20,
        fontWeight : 'bold'


    },
    img : {
        width:350,
        height:200,
        marginLeft:5
    }
})

export default Play;