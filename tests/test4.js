dic = {
    "dsf": 10,
    "d": 20,
}
dic["d"] = { ...dic["d"], "n": 10 };
dic["d"] = { ...dic["d"], "e": 20 };
dic["d"] = { ...dic["d"], "5": 30 };
console.log(dic)