const express = require("express");
const router = express.Router();

// // localhost:3000/api/
// router.get('/', (req,res) => {
//     res.send("default url for goods.js GET Method");
// })

// // localhost:3000/api/about GET메소드가 실행됐을때
// router.get('/about', (req,res)=>{
//     res.send("goods.js about PATH");
// })

// /routes/goods.js

const goods = [
    {
      goodsId: 4,
      name: "상품 4",
      thumbnailUrl:
        "https://cdn.pixabay.com/photo/2016/09/07/02/11/frogs-1650657_1280.jpg",
      category: "drink",
      price: 0.1,
    },
    {
      goodsId: 3,
      name: "상품 3",
      thumbnailUrl:
        "https://cdn.pixabay.com/photo/2016/09/07/02/12/frogs-1650658_1280.jpg",
      category: "drink",
      price: 2.2,
    },
    {
      goodsId: 2,
      name: "상품 2",
      thumbnailUrl:
        "https://cdn.pixabay.com/photo/2014/08/26/19/19/wine-428316_1280.jpg",
      category: "drink",
      price: 0.11,
    },
    {
      goodsId: 1,
      name: "상품 1",
      thumbnailUrl:
        "https://cdn.pixabay.com/photo/2016/09/07/19/54/wines-1652455_1280.jpg",
      category: "drink",
      price: 6.2,
    },
  ];

  router.get("/goods", (req, res) => {
    res.status(200).json({goods})
  });

  router.get("/goods/:goodsId", (req, res) => {
    const { goodsId } = req.params;

    // let result = null;
    // for (const good of goods){
    //     if (Number(goodsId) === good.goodsId){
    //         result = good;
    //     }
    // }

    // // 위에거나 아래거나 형태는 똑같음

    const [result] = goods.filter((good) => Number(goodsId) === good.goodsId)

    res.status(200).json({ detail: result });
  })

  router.delete("/goods/:goodsId/cart", async (req, res) => {
    const { goodsId } = req.params;
  
    const existsCarts = await Cart.find({ goodsId });
    if (existsCarts.length > 0) {
      await Cart.deleteOne({ goodsId });
    }
  
    res.json({ result: "success" });
  });

  const Cart = require("../schemas/cart.js")
  router.post("/goods/:goodsId/cart", async(req,res) => {
    const { goodsId } = req.params;
    const { quantity } = req.body;

    const existsCarts = await Cart.find({goodsId:Number(goodsId)});
    if (existsCarts.length){
      return res.status(400).json({
        success:false, 
        errorMessage: "이미 장바구니에 해당하는 상품이 존재합니다"
      })
    }
    await Cart.create({ goodsId: Number(goodsId), quantity: quantity });

    res.json({result:"suceess"});

  });

  const Goods = require("../schemas/goods.js");
  router.post("/goods/", async (req,res)=>{
    const {goodsId, name, thumbnailUrl, category, price} = req.body;

    const goods = await Goods.find({goodsId});

    if (goods.length){
      return res.status(400).json({
        success:false,
      errorMessage:"이미 존재하는 GoodsId입니다."
      })
    }

    const createGoods = await Goods.create({goodsId, name, thumbnailUrl, category, price});

    res.json({goods: createGoods});
  })

  router.put("/goods/:goodsId/cart", async (req, res) => {
    const { goodsId } = req.params;
    const { quantity } = req.body;
  
    const existsCarts = await Cart.find({ goodsId: Number(goodsId) });
    if (existsCarts.length) {
      await Cart.updateOne({ goodsId: Number(goodsId) }, { $set: { quantity } });
    }
  
    res.json({ success: true });
  })



  
module.exports = router;

