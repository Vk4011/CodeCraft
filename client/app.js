
const input = document.querySelector("#input");
const result = document.getElementById("result");

async function sum() {
  const v = input.value;
  console.log(`\n\t value: ${v}`);
  const response = await fetch(`http://localhost:4090/sum`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ value: v }),
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
    result.textContent = data.result;
  } else {
    result.textContent = "Error occurred while fetching data.";
  }
}



const fetchRev=async ()=>{
    try{
        const v = input.value;
        const response = await fetch("http://localhost:4090/rev",{
            method:"GET",
            headers:{
                'value':`${v}`
            }
        });
        if(!response.ok){
            throw new Error(' Network response was not ok ');
        }
        const data = await response.text();
        console.log(data);
        result.textContent=data;
    }catch(error){
        console.error('There was a problem with the fetch operation : ',error);

    }
};
