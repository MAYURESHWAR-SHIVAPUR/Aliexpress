import React from 'react'
import FooterComp from '../footerComp/FooterComp'

const footer1 = () => {
  return (
    <div className='bg-[#f0f1f3] h-fit w-screen flex items-start justify-around p-10 text-sm'>
      <div className='h-full w-1/2 px-5'>
        <FooterComp title="Help" info="Help Center, Disputes & Reports, Return&refund policy, Report IPR infringement, DSA/OSA Information, Integrity Compliance, Transparency Center, Submit report (non-registered users), Return Policy" />
        <FooterComp title="AliExpress Multi-Language Sites" info="Russian, Portuguese, Spanish, French, German, Italian, Dutch, Turkish, Japanese, Korean, Thai, Arabic, Hebrew, Polish" />
      </div>
      <div className='h-full w-1/2 px-5'>
        <FooterComp title="Browse by Category" info="All Popular, Product, Promotion, Low Price, Great Value, Reviews, Wiki, Blog, Video" />
        <FooterComp title="Alibaba Group" info="Alibaba Group Website, AliExpress, Alimama, Alipay, Fliggy, Alibaba Cloud, Alibaba International, AliTelecom, DingTalk, Juhuasuan, Taobao Marketplace, Tmall, Taobao Global, AliOS, 1688" />
      </div>
    </div>
  )
}

export default footer1


// Help
// Help Center, Disputes & Reports, Return&refund policy, Report IPR infringement, DSA/OSA Information, Integrity Compliance, Transparency Center, Submit report (non-registered users), Return Policy
// AliExpress Multi-Language Sites
// Russian, Portuguese, Spanish, French, German, Italian, Dutch, Turkish, Japanese, Korean, Thai, Arabic, Hebrew, Polish
// Browse by Category
// All Popular, Product, Promotion, Low Price, Great Value, Reviews, Wiki, Blog, Video
// Alibaba Group
// Alibaba Group Website, AliExpress, Alimama, Alipay, Fliggy, Alibaba Cloud, Alibaba International, AliTelecom, DingTalk, Juhuasuan, Taobao Marketplace, Tmall, Taobao Global, AliOS, 1688