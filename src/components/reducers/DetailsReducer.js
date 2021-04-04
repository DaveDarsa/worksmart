//will need the following functions:
//add tasktype (automatically initialize empty basicitems[] and sublist[]), payload= namestr.
// delete tasktype, payload = namestr
//--------------------------------------------------
//add basic, payload = {name:'where',item:string}
//remove basic,  payload= {name:'where','item:String}
//--------------------------------------------------

//add sublist- payload={name:'where', sublistName:'str'}
//remove sublist-  payload=  {name:'where', sublistName:'str'}
//--------------------------------------------------

//add sublistitem - payload={tasktypeName:str,sublistName:str,TASKNAME:'str'}
//remove sublistitem payload= {tasktypename:str,sublistname:Str,taskname:'str'}
//--------------------------------------------------

export const DetailsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASKTYPE":
      return [
        ...state,
        { name: action.payload.taskTypeName, basicItems: [], sublist: [] },
      ];
    case "DELETE_TASKTYPE":
      return state.filter((each) => {
        return each.name !== action.payload.taskTypeName;
      });
    case "ADD_BASIC":
      //tasktypename,basicitem
      var foundType = state.find((item) => {
        return item.name === action.payload.taskTypeName;
      });
      var idx = state.indexOf(foundType);
      var copiedState = [...state];
      var copiedType = JSON.parse(JSON.stringify(foundType));
      copiedType.basicItems.push(action.payload.basicItem);
      copiedState[idx] = copiedType;
      return copiedState;
    case "REMOVE_BASIC":
      //tasktypename,basicitem
      var foundObject = state.find((item) => {
        return item.name === action.payload.taskTypeName;
      });
      var idx1 = state.indexOf(foundObject);
      var copiedState1 = [...state];
      var copiedType1 = JSON.parse(JSON.stringify(foundObject));
      copiedType1.basicItems = copiedType1.basicItems.filter((item) => {
        return action.payload.basicItem !== item;
      });
      copiedState1[idx1] = copiedType1;
      return copiedState1;

    case "ADD_SUBLIST":
      //payload={name:'where', sublistName:'str'}
      var foundOb = state.find((item) => {
        return item.name === action.payload.taskTypeName;
      });
      var index = state.indexOf(foundOb);
      var statecopy = [...state];
      var copiedOb = JSON.parse(JSON.stringify(foundOb));
      var sublist = { name: action.payload.sublistName, items: [] };
      copiedOb.sublist.push(sublist);
      statecopy[index] = copiedOb;
      return statecopy;
    case "REMOVE_SUBLIST":
      //payload=  {name:'where', sublistName:'str'}
      console.log(action.payload);
      var foundOb1 = state.find((item) => {
        return item.name === action.payload.taskTypeName;
      });
      var index1 = state.indexOf(foundOb1);
      var statecopy1 = [...state];
      var copiedOb1 = JSON.parse(JSON.stringify(foundOb1));
      copiedOb1.sublist = copiedOb1.sublist.filter((sub) => {
        return sub.name !== action.payload.sublistName;
      });
      statecopy1[index1] = copiedOb1;
      return statecopy1;
    case "ADD_SUB_ITEM":
      //payload={tasktypeName:str,sublistName:str,TASKNAME:'str'}
      var obcopy = state.find((item) => {
        return item.name === action.payload.taskTypeName;
      });
      var obIdx = state.indexOf(obcopy);
      var copystate = [...state];
      var copyofob = JSON.parse(JSON.stringify(obcopy));
      var copyofobSub = copyofob.sublist.find((eachList) => {
        return eachList.name === action.payload.sublistName;
      });
      copyofobSub.items.push(action.payload.taskName);
      copystate[obIdx] = copyofob;
      return copystate;
    case "DELETE_SUB_ITEM":
      //payload={tasktypeName:str,sublistName:str,TASKNAME:'str'}
      console.log(action.payload);
      var obcopy1 = state.find((item) => {
        return item.name === action.payload.taskTypeName;
      });
      var obIdx1 = state.indexOf(obcopy1);
      var copystate1 = [...state];
      var copyofob1 = JSON.parse(JSON.stringify(obcopy1));
      var copyofobSub1 = copyofob1.sublist.find((eachList) => {
        return eachList.name === action.payload.sublistName;
      });
      copyofobSub1.items = copyofobSub1.items.filter((itm) => {
        return itm !== action.payload.taskName;
      });

      copystate1[obIdx1] = copyofob1;
      return copystate1;
    default:
      return state;
  }
};

// let samplestate = [
//   {
//     name: "basic",
//     basicItems: [],
//     sublist: [
//       {
//         name: "tomorrow",
//         items: ["get up", "workout"],
//       },
//       {
//         name: "next week",
//         items: ["finish project", "lay off coffee"],
//       },
//     ],
//   },
//   {
//     name: "entertainment",
//     basicItems: [],
//     sublist: [],
//   },
//   {
//     name: "lifegoals",
//     basicItems: ["good stuff", "more stuff"],
//     sublist: [],
//   },
// ];
