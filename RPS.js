function RPS(){
    const choices = ["gu","choki","pa","muteki"];
    //この書き方は、配列（↑この言葉の入った箱を作っているイメージ）です。C言語参照
    // let select = document.createElement("select");
    // let option1 = document.createElement("option");
    // let option2 = document.createElement("option");
    // let option3 = document.createElement("option");
    // const gu = "gu";
    // option1.value = gu;
    // option1.textContent = gu;
    // select.appendChild(option1);
    // option2.value = tyoki;
    // option2.textContent =tyoki;
    // select.appendChild(option2);
    // option3.value = pa;
    // option3.textContent = pa;
    // select.appendChild(option3);
    
    // gameContainer.appendChild(select);
    let select = document.createElement("select");
    choices.forEach(choice => {
        let option = document.createElement("option");
        option.value = choice;
        option.textContent = choice;
        select.appendChild(option);
    });
    gameContainer.appendChild(select);

    let image = document.createElement("img");
    image.alt = "Choice";
    image.style.width = "100px";
    image.style.heigth = "100px";
    image.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQhsfUvWhhVJej7FEqYsQbe0EwLCOHYxKU4KnrF026nnfJkiM3yQO2NFmnnX0nD4P2IdCmg8qFQpZMW8vtbs-K7sLpoCqXwO0fkTT7UL5VkM-E2MOUNXpikYfspDKaxidAehqcuQoIrcM/s800/janken_pa.png";
    gameContainer.appendChild(image);
    //forEach 配列などの複数のデータがあるもの使える。全部やる関数
    //配列.forEach(配列の中身 =>{命令})
}