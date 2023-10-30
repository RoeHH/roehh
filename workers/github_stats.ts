
const db = await Deno.openKv();

type ReceiverId = "updateGithubData" 
const receivers: Record<ReceiverId, Function> = {
    updateGithubData : (message: string)=>{
        console.log(message);
    }
}

const delays: Record<ReceiverId, number> = {
    updateGithubData: 1 * 60000 * 60
}

type QueueMessage = {
    receiver: keyof typeof receivers
    message: string
}

db.listenQueue(async (msg: QueueMessage) => {
    switch (msg.receiver) {
        case "updateGithubData":
            if((await db.get(["updateGithubData", "time"])).value < (Date.now() - (delays.updateGithubData))) {
                await db.set(["updateGithubData", "time"],  Date.now())
                receivers.updateGithubData(msg.message);
            }
            await db.enqueue(
                { receiver: "updateGithubData", message: "test" } as QueueMessage,
                { delay: 1000 }
            );
            break;
    }
});

await db.enqueue(
    { receiver: "updateGithubData", message: "init" } as QueueMessage,
    { delay: 1000 }
);
await db.set(["updateGithubData", "time"],  Date.now())
