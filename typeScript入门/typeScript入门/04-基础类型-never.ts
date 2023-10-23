// TS基础类型
// never

// never 代表存在无法到达的终点
function error (message: string): never{
    throw new Error(message)
}

function infiniteLoop(): never{
    while(true) {
        console.log(111);
    }
}


