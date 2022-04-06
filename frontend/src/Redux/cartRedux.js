import { createSlice } from "@reduxjs/toolkit";
var proCount = 0;
var gpuCount = 0;
var MoboCount = 0;
var RamCount = 0;
var PSUCount = 0;
var CoolingCount = 0;
var CasingCount=0;
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    prosocket:0,
    ramSupp:0,
    proCount:0,
    gpuCount:0,
    moboCount:0,
    ramCount:0,
    gpuwatt:0,
    psuwatt:0,
    mobosize:0,
    fixedHddCount:6,
    psucount:0,
  
  },
  reducers: {
    addProduct: (state, action) => {
      //alert(action.payload);
      //state.products = action.payload;
      if (proCount > 0) {
        return alert("Item can not be added");
      } else {
        state.products.push(action.payload);
        state.prosocket = (action.payload.socket)
        proCount++;
        state.proCount++;
      }
     //console.log(action.payload);
      console.log(state.prosocket);
      //state.products.push(action.payload);
      //state.total += action.payload.price * action.payload.quantity;
    },
    addgpu: (state, action) => {
      //alert(action.payload);
      //state.products = action.payload;
      if (gpuCount > 0) {
        return alert("Only 1 GPU can be added");
      } else {
        state.products.push(action.payload);
        gpuCount++;
        state.gpuCount++;
        state.gpuwatt = action.payload.watt;
      }
      console.log(gpuCount);

      //state.products.push(action.payload);
      //state.total += action.payload.price * action.payload.quantity;
    },
    addMobo: (state, action) => {
      //alert(action.payload);
      //state.products = action.payload;
      if (MoboCount > 0) {
        return alert("Only 1 Motherboard can be added");
      } else {
        state.products.push(action.payload);
        state.ramSupp = (action.payload.ramSupport)
    
        state.moboCount++;
        state.mobosize = action.payload.size;
      }
  

      //state.products.push(action.payload);
      //state.total += action.payload.price * action.payload.quantity;
    },
    addRam: (state, action) => {
      //alert(action.payload);
      //state.products = action.payload;
      console.log(RamCount);
      if (RamCount > 0) {
     
        return alert("Only Rams from same company can be added");
      } else {
        state.products.push(action.payload);
     
        state.ramCount++;
      }
      

      //state.products.push(action.payload);
      //state.total += action.payload.price * action.payload.quantity;
    },

    addHdd: (state, action) => {
      //alert(action.payload);
    
       if(state.fixedHddCount>0){
        state.products.push(action.payload);
        
       state.fixedHddCount--;
      }
      else{
        return alert("All SATA ports are occupied");
      }
      
      

      //state.products.push(action.payload);
      //state.total += action.payload.price * action.payload.quantity;
    },

    addSsd: (state, action) => {
      //alert(action.payload);
    
      if(state.fixedHddCount>0){
        state.products.push(action.payload);
     
        state.fixedHddCount--;
      }
        
      else{
        alert("All SATA ports are occupied");
      }
      
      

      //state.products.push(action.payload);
      //state.total += action.payload.price * action.payload.quantity;
    },




    addPSU: (state, action) => {
      //alert(action.payload);
      //state.products = action.payload;
    
      if (state.psucount > 0) {
     
        return alert("Item can not be added");
      } else {
        state.products.push(action.payload);

        state.psuwatt = action.payload.watt;
        state.psucount++;
      }
      

      //state.products.push(action.payload);
      //state.total += action.payload.price * action.payload.quantity;
    },
    addCooling: (state, action) => {
      //alert(action.payload);
      //state.products = action.payload;
      console.log(CoolingCount);
      if (CoolingCount > 0) {
     
        return alert("Item can not be added");
      } else {
        state.products.push(action.payload);
        CoolingCount++;
      }
      

      //state.products.push(action.payload);
      //state.total += action.payload.price * action.payload.quantity;
    },
    addCasing:(state, action) => {
      //alert(action.payload);
      //state.products = action.payload;
      console.log(CasingCount);
      if (CasingCount > 0) {
     
        return alert("Item can not be added");
      } else {
        state.products.push(action.payload);
        CasingCount++;
      }
      

      //state.products.push(action.payload);
      //state.total += action.payload.price * action.payload.quantity;
    },

  },
  
});
export const getCartItems = (state) => state.cart.products;
export const getsocket = (state) => state.cart.prosocket;
export const getramSupp = (state) => state.cart.ramSupp;
export const getproCount = (state)=>state.cart.proCount;
export const getgpuCount = (state)=>state.cart.gpuCount;
export const getmoboCount = (state)=>state.cart.moboCount;
export const getramCount = (state)=>state.cart.ramCount;
export const getgpuwatt = (state)=>state.cart.gpuwatt;
export const getmobosize = (state)=>state.cart.mobosize;
export const getpsucount = (state)=>state.cart.psucount;
export const {addSsd, addHdd, addCasing,addCooling,addPSU,addRam,addProduct, addgpu,addMobo } = cartSlice.actions;
export default cartSlice.reducer;
