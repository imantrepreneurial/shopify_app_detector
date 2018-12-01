var SHOPIFY_APPS = [
    {
        name: 'Fera.ai', // Keep this under 20 characters
        short_description: 'Real-time personalization (timers, social proof, counters, etc.)',  // Keep this under 75 characters
        long_description: 'Real-time personalization and conversion rate optimization platform with built-in promo bars, popups, timers, social proof, counters, etc.', 
        app_store_url: 'https://apps.shopify.com/fera', 
        website_url: "https://www.fera.ai",
        script_pattern: "bananastand.js",
        category: "Sales"
    },
    {
        name: "Tawk.to",
        short_description: "Live chat",
        app_store_url: "https://apps.shopify.com/tawk-to",
        website_url: "https://www.tawk.to",
        script_pattern: "embed.tawk.to",
        category: "Customer service"    
    },
    {
        name: "Privy",
        short_description: "Free email popups, exit intent, targeted modals, wheels & more",
        app_store_url: "https://apps.shopify.com/privy",
        website_url: "https://www.privy.com",
        script_pattern: "shopify.privy.com/widget.js?shop=wolfieshaven.myshopify.com",
        category: "Marketing"    
    },
    {
        name: "Shipping Bar",
        short_description: "Free shipping bar with updated cart goal to boost order value",
        app_store_url: "https://apps.shopify.com/free-shipping-bar",
        website_url: "https://hextom.com",
        script_pattern: "lastsecondcoupon/js/freeshippingbar.js",
        category: "Marketing"    
    },
    {
        name: "PushOwl",
        short_description: "Recover Abandoned Carts via Push Notifications",
        app_store_url: "https://apps.shopify.com/pushowl",
        website_url: "https://pushowl.com",
        script_pattern: "sdks/pushowl-shopify.js",
        category: "Marketing"    
    },
    {
        name: "Just Uno",
        short_description: "Pop Ups & Social Media Marketing Platform",
        app_store_url: "https://apps.shopify.com/justuno-social-email-leads",
        website_url: "https://www.justuno.com",
        script_pattern: "mwgt_3.6.js?v=1.07",
        category: "Marketing"    
    },
    {
        name: "Shogun",
        short_description: "Landing Page Builder",
        app_store_url: "https://apps.shopify.com/shogun",
        website_url: "https://getshogun.com",
        script_pattern: "cdn.getshogun.com/pixel.js",
        category: "Marketing"    
    },
    {
        name: "Happy Email",
        short_description: "Automated and personalized welcome emails to new customers",
        app_store_url: "https://apps.shopify.com/beeketing",
        website_url: "https://beeketing.com",
        script_pattern: "js/1.beeketing.2818b52aa5a936e219c8.js",
        category: "Marketing"    
    },
    {
        name: "Omnisend",
        short_description: "Email & Marketing Automation",
        app_store_url: "https://apps.shopify.com/omnisend",
        website_url: "https://apps.shopify.com/omnisend",
        script_pattern: "inShop/forms.js?v=2018-07-23T08",
        category: "Marketing"    
    },
    {
        name: " Smile.io",
        short_description: "Loyalty Points, VIP, Referral Programs",
        app_store_url: "https://apps.shopify.com/smile-io",
        website_url: "https://smile.io",
        script_pattern: "assets/storefront.js",
        category: "Marketing"    
    },
    {
        name: "Mailchimp",
        short_description: "Email & Marketing",
        app_store_url: "https://apps.shopify.com/mailchimp",
        website_url: "https://mailchimp.com",
        script_pattern: "js/signup-forms/popup/1.0/popup.js",
        category: "Marketing"    
    },
    {
        name: "Spin‑a‑Sale",
        short_description: "Interactive email pop-up",
        app_store_url: "https://apps.shopify.com/spin-a-sale",
        website_url: "https://spinasale.com",
        script_pattern: "js/spin-v3.js",
        category: "Marketing"    
    },
    {
        name: "Ali Reviews",
        short_description: "Import reviews from AliExpress, Photo & Site Reviews",
        app_store_url: "https://apps.shopify.com/ali-reviews",
        website_url: "https://fireapps.io",
        script_pattern: "js/frontend/comment.js",
        category: "Marketing"    
    },
    {
        name: "Jilt eCommerce email marketing",
        short_description: "Boost revenue in minutes with effective automated emails",
        app_store_url: "https://apps.shopify.com/jilt-cart-abandonment-solution",
        website_url: "https://jilt.com",
        script_pattern: "storefront/v1/jilt.js",
        category: "Marketing"    
    },
    {
        name: "Conversio Marketing Automation",
        short_description: "Email Marketing Automation. Make every email count",
        app_store_url: "https://apps.shopify.com/conversio",
        website_url: "https://conversio.com",
        script_pattern: "scripts/shopify.js",
        category: "Marketing"    
    },
    {
        name: "Wheelio",
        short_description: "Gamified pop‑up",
        app_store_url: "https://apps.shopify.com/wheelio-first-interactive-exit-intent-pop-up",
        website_url: "http://wheelio.conversionpirate.com",
        script_pattern: "wlocomplete.js",
        category: "Marketing"    
    },
    {
        name: "MailChimp Forms",
        short_description: "MailChimp list with exit intent popups and coupons",
        app_store_url: "https://apps.shopify.com/mailchimp-forms",
        website_url: "https://www.mailmunch.co",
        script_pattern: "widgets/site-519579-1d4a0439b676bb9b4e1159635561fda7fb2c0857.js",
        category: "Marketing"    
    },
    {
        name: "PageFly",
        short_description: "Advanced Page Builder",
        app_store_url: "https://apps.shopify.com/pagefly",
        website_url: "https://www.sellersmith.com",
        script_pattern: "assets/pagefly/assets/1.3.5/helper.js",
        category: "Marketing"    
    },
    {
        name: "Better Coupon Box",
        short_description: "Email Popups with Exit Intent",
        app_store_url: "https://apps.shopify.com/better-coupon-box",
        website_url: "https://beeketing.com",
        script_pattern: "js/10.beeketing.c587799de2101deaf133.js",
        category: "Marketing"    
    },
    {
        name: "Clever Google Adwords",
        short_description: "Boost your marketing tactics with Google Ads by Clever Adwords",
        app_store_url: "https://apps.shopify.com/cleverppc",
        website_url: "https://www.cleverecommerce.com",
        script_pattern: "mc.js",
        category: "Marketing"    
    },
    {
        name: "Swell",
        short_description: "Rewards and Referrals",
        app_store_url: "https://apps.shopify.com/swell",
        website_url: "https://www.cleverecommerce.com",
        script_pattern: "loader/aRJ9CNJobels-PwCyJj49w.js",
        category: "Marketing"    
    },
    {
        name: "Email Collection Bar",
        short_description: "Grow your email list with customizable bar, and boost sales",
        app_store_url: "https://apps.shopify.com/email-collection-bar",
        website_url: "https://hextom.com",
        script_pattern: "lastsecondcoupon/js/emailcollectionbar.js",
        category: "Marketing"    
    },
    {
        name: "Popup Upsell on Exit & Visit",
        short_description: "Fully Customizable Popup",
        app_store_url: "https://apps.shopify.com/upsell-popup-on-exit-visit",
        website_url: "https://spur-i-t.com",
        script_pattern: "upsell-on-exit-visit/js/common.js",
        category: "Marketing"    
    },
    {
        name: "MailMunch",
        short_description: "Email Popups with Exit Intent",
        app_store_url: "https://apps.shopify.com/mailmunch",
        website_url: "https://www.mailmunch.co",
        script_pattern: "widgets/site-519579-1d4a0439b676bb9b4e1159635561fda7fb2c0857.js",
        category: "Marketing"    
    },
    {
        name: "Pixelpop Popups & Banners",
        short_description: "Build your mailing list and boost sales with popups",
        app_store_url: "https://apps.shopify.com/popups-promos-banners-pixelpop",
        website_url: "http://pixelunion.net",
        script_pattern: "scripts/0a0d1e73-e299-407f-8c22-da5d1b2f5f22/pixelpop.js",
        category: "Marketing"    
    },
    {
        name: "Welcome Header Bar",
        short_description: "Header Bar to Promote Your Best Deals and Increase Shares",
        app_store_url: "https://apps.shopify.com/promo-bar",
        website_url: "https://info.zotabox.com",
        script_pattern: "3/7/37d2da9877506cbc6580b0f68fea8c59/widgets.js",
        category: "Marketing"    
    },
    {
        name: "WhatsApp Share + Chat",
        short_description: "Let your customer be your promoter, abandoned cart on whatsapp",
        app_store_url: "https://apps.shopify.com/whatsapp-sharing",
        website_url: "https://shopiapps.in",
        script_pattern: "whatsapp-share/inc/whatsapp-button.js",
        category: "Marketing"    
    },
    {
        name: "OptinMate",
        short_description: "Email Collection, Coupons & Social Popups, Bards & Cards",
        app_store_url: "https://apps.shopify.com/optinmate-2",
        website_url: "https://optinmate.com",
        script_pattern: "3980/get.js",
        category: "Marketing"    
    },
    {
        name: "Sumo",
        short_description: "Grow Sales & Conversion",
        app_store_url: "https://apps.shopify.com/sumome",
        website_url: "https://sumo.com",
        script_pattern: "sumome-plugin/js/sumome.js",
        category: "Marketing"    
    },
    {
        name: "Refersion: Affiliate Marketing",
        short_description: "Track referrals & pay commissions to affiliates + influencers",
        app_store_url: "https://apps.shopify.com/refersion",
        website_url: "https://www.refersion.com",
        script_pattern: "cdn.refersion.com/pixel.js",
        category: "Marketing"    
    },
    {
        name: "Care Cart Abandoned Recovery",
        short_description: "Recover Abandon Cart Orders by Sales & Marketing Automation",
        app_store_url: "https://apps.shopify.com/care-cart",
        website_url: "https://carecart.io",
        script_pattern: "api/abandoned-cart/js-script",
        category: "Marketing"    
    },
    {
        name: "RetargetApp",
        short_description: "Get more sales and new customers with automated Facebook ads",
        app_store_url: "https://apps.shopify.com/retargetapp-facebook-retargeting",
        website_url: "http://retargetapp.com",
        script_pattern: "pixel/pixel.min.js",
        category: "Marketing"    
    },
    {
        name: "Push Nova",
        short_description: "Web Push & Facebook Messenger Conversion Marketing",
        app_store_url: "https://apps.shopify.com/simple-push",
        website_url: "https://pushnova.streamlinedapps.com",
        script_pattern: "streamlined-apps-production/streamlined-push-assets/store-site-plugin/js/streamlined-push-plugin.production.min.js",
        category: "Marketing"    
    },
    {
        name: "Sales Rocket",
        short_description: "All-in-1 scarcity, urgency and social proof",
        app_store_url: "https://apps.shopify.com/window-shoppers",
        website_url: "http://www.codeinero.net",
        script_pattern: "Scripts/windowshoppers.min.js",
        category: "Marketing"    
    },
    {
        name: "Sales Pop ‑ Sales Notification",
        short_description: "Add urgency, boost conversions with Recent Sales Notifications",
        app_store_url: "https://apps.shopify.com/sales-pop",
        website_url: "https://beeketing.com",
        script_pattern: "js/1.beeketing.2818b52aa5a936e219c8.js",
        category: "Sales"    
    },
    {
        name: "Recart Messenger Marketing",
        short_description: "Facebook Messenger Marketing & Abandoned Cart App",
        app_store_url: "https://apps.shopify.com/recart",
        website_url: "https://recart.com",
        script_pattern: "messenger/loader.js",
        category: "Sales"    
    },
    {
        name: "Mobile Converter",
        short_description: "Easily boost conversion rates and sales on mobile devices",
        app_store_url: "https://apps.shopify.com/mobile-web-boost",
        website_url: "https://beeketing.com",
        script_pattern: "js/1.beeketing.2818b52aa5a936e219c8.js",
        category: "Sales"    
    },
    {
        name: "Consistent Cart",
        short_description: "Messenger Marketing & Abandoned Cart Recovery",
        app_store_url: "https://apps.shopify.com/consistent-cart",
        website_url: "https://www.consistentcart.com/",
        script_pattern: "s/files/1/0015/3160/9160/t/1/assets/consistent_cart_addon.min.js",
        category: "Sales"    
    },
    {
        name: "Discounted Upsells",
        short_description: "Cross Sell and Upsell for more Sales",
        app_store_url: "https://apps.shopify.com/discounted-upsells",
        website_url: "",
        script_pattern: "ajax/libs/jquery/1.12.0/jquery.min.js",
        category: "Sales"    
    },
    {
        name: "Conversion Plus",
        short_description: "Free cart reservation countdown timer that increases sales",
        app_store_url: "https://apps.shopify.com/conversion",
        website_url: "https://trust.varinode.com/",
        script_pattern: "cv_initjs.php?shop=wolfieshaven.myshopify.com&rnd=1532408433",
        category: "Sales"    
    },
    {
        name: "Stamped.io",
        short_description: "Collect Product reviews, site reviews and photo/video reviews",
        app_store_url: "https://apps.shopify.com/product-reviews-addon",
        website_url: "https://stamped.io",
        script_pattern: "cdn-stamped-io.azureedge.net/files/shopify.v2.min.js",
        category: "Sales"    
    },
    {
        name: "Product Reviews",
        short_description: "The simplest way to share your customers experiences.",
        app_store_url: "https://apps.shopify.com/product-reviews",
        website_url: "https://help.shopify.com/en/manual/apps/apps-by-shopify/product-reviews",
        script_pattern: "assets/v4/spr.js",
        category: "Sales"    
    },
    {
        name: "Ads by Varinode",
        short_description: "Free Ad exchange to help you acquire high quality traffic",
        app_store_url: "https://apps.shopify.com/ads",
        website_url: "http://avs.varinode.com",
        script_pattern: "avjs.php?app_id=75cf8109d3ba47f0b4b5b934784f42d4",
        category: "Sales"    
    },
    {
        name: "Loox Reviews",
        short_description: "Photo Reviews (Product Reviews)",
        app_store_url: "https://apps.shopify.com/loox",
        website_url: "https://loox.app",
        script_pattern: "widget/Vy-vTrskEB/loox.js",
        category: "Sales"    
    },
    {
        name: "SMS FREE Web Push messages",
        short_description: "Order recovery with SMS and FREE Web push notifications",
        app_store_url: "https://apps.shopify.com/firepush",
        website_url: "https://firepush.io/",
        script_pattern: "sdk/shopify/180724082403gemem4kb4ppap6q3rr1c/shopify.min.js",
        category: "Sales"    
    },
    {
        name: "Frequently Bought Together",
        short_description: "Amazon-like Bundle Recommendations, Upsell and Discounts",
        app_store_url: "https://apps.shopify.com/frequently-bought-together",
        website_url: "https://www.codeblackbelt.com",
        script_pattern: "js/modules/frequently-bought-together/main.min.js",
        category: "Sales"    
    },
    {
        name: "Personalizer by LimeSpot",
        short_description: "Upsell, Cross-sell and Personalized Recommendations by AI",
        app_store_url: "https://apps.shopify.com/limespot",
        website_url: "https://www.limespot.com",
        script_pattern: "storefront/2.0.0/js/shopify/checkout-tracker.min.js",
        category: "Sales"    
    },
    {
        name: "McAfee SECURE",
        short_description: "Show visitors your site is secure",
        app_store_url: "https://apps.shopify.com/mcafee-secure",
        website_url: "https://www.mcafeesecure.com/for-consumers",
        script_pattern: "js/partner-shopify.js",
        category: "Sales"    
    },
    {
        name: "Quick View by Secomapp",
        short_description: "Product preview in a click",
        app_store_url: "https://apps.shopify.com/quick-view",
        website_url: "https://www.secomapp.com",
        script_pattern: "s/files/1/0015/3160/9160/t/1/assets/sca-qv-scripts-noconfig.js",
        category: "Sales"    
    },
    {
        name: "Judge.me",
        short_description: "Product Reviews",
        app_store_url: "https://apps.shopify.com/judgeme",
        website_url: "https://judge.me/",
        script_pattern: "assets/installed.js",
        category: "Sales"    
    },
    {
        name: "Subscriptions",
        short_description: "Launch and scale your subscription and recurring business",
        app_store_url: "https://apps.shopify.com/subscription-payments",
        website_url: "https://rechargepayments.com",
        script_pattern: "static/js/recharge.js",
        category: "Sales"    
    },
    {
        name: "Also Bought",
        short_description: "Recommendations - Customers Who Bought This Item Also Bought",
        app_store_url: "https://apps.shopify.com/also-bought",
        website_url: "https://www.codeblackbelt.com",
        script_pattern: "js/modules/also-bought/main.min.js",
        category: "Sales"    
    },
    {
        name: "Personalized Recommendation",
        short_description: "Recommend & upsell targeted products to the right customers",
        app_store_url: "https://apps.shopify.com/product-recommendation",
        website_url: "https://beeketing.com/",
        script_pattern: "js/1.beeketing.e77d5447ed45412d08d4.js",
        category: "Sales"    
    },
    {
        name: "Persistent Cart",
        short_description: "Increase sales: Remember customers' carts across their devices",
        app_store_url: "https://apps.shopify.com/remember-my-cart",
        website_url: "https://recovermycart.freshdesk.com/support/solutions/articles/33000213763-remember-my-cart-faq",
        script_pattern: "RememberMyCart/Manage/CartJS",
        category: "Sales"    
    },
    {
        name: "Wishlist Pro",
        short_description: "A beautiful, advanced & customizable wishlist plugin",
        app_store_url: "https://apps.shopify.com/wishy",
        website_url: "",
        script_pattern: "wishy-placer.production.min.js",
        category: "Sales"    
    },
    {
        name: "Bold Subscription",
        short_description: "Subscription Box and Recurring Orders",
        app_store_url: "https://apps.shopify.com/recurring-orders",
        website_url: "https://boldcommerce.com/bold-subscriptions",
        script_pattern: "v2_ui/js/ro.js",
        category: "Sales"    
    },
    {
        name: "Bold Upsell ‑ Upsell Smarter",
        short_description: "Product Upsell, Cross-sell & Smart Upsells to make more money",
        app_store_url: "https://apps.shopify.com/product-upsell",
        website_url: "https://boldcommerce.com",
        script_pattern: "v2_ui/js/upsell.js",
        category: "Sales"    
    },
    {
        name: "Easy Tabs ‑ Product Tabs",
        short_description: "Tabs for your products. Simple yet powerful tabs app",
        app_store_url: "https://apps.shopify.com/product-description-tabs",
        website_url: "https://nexusmedia-ua.com",
        script_pattern: "easyslide/jquery191.min.js",
        category: "Sales"    
    },
    {
        name: "Yotpo Reviews",
        short_description: "Collect product reviews, site reviews, and photo reviews",
        app_store_url: "https://apps.shopify.com/yotpo-social-reviews",
        website_url: "https://www.yotpo.com",
        script_pattern: "IXIPbUUaSDk7SJp6bMDePLV8uhTmVmaq3V5NzG5i/widget.js",
        category: "Sales"    
    },
    {
        name: "Bizzy Social Proof",
        short_description: "Create urgency with recent sales notifications",
        app_store_url: "https://apps.shopify.com/bizzy-social-proof",
        website_url: "https://www.pixelunion.net/",
        script_pattern: "recent-sales/5464b27b39123911a1759ecea085f176/bootstrap.js",
        category: "Sales"    
    },
    {
        name: "Buy Me",
        short_description: "Sticky Buy Button",
        app_store_url: "https://apps.shopify.com/mps-buy-me",
        website_url: "https://makeprosimp.com/",
        script_pattern: "app/js/app.js?shop=wolfieshaven.myshopify.com&key=a4db70fac62243deace0648b079a7a19",
        category: "Sales"    
    },
    {
        name: "Bold Product Options",
        short_description: "Product options to one or one thousand products with a click!",
        app_store_url: "https://apps.shopify.com/product-options",
        website_url: "https://nexusmedia-ua.com",
        script_pattern: "js/options.js",
        category: "Sales"    
    },
    {
        name: "Express Reviews",
        short_description: "Import reviews from AliExpress INSTANTLY",
        app_store_url: "https://apps.shopify.com/express-reviews",
        website_url: "https://appiversal.net/",
        script_pattern: "src/er.js",
        category: "Sales"    
    },
    {
        name: "Cart Convert",
        short_description: "Product Upsell & Cross-sell",
        app_store_url: "https://apps.shopify.com/cart-convert",
        website_url: "https://eastsideco.com/",
        script_pattern: "client.js",
        category: "Sales"    
    },
    {
        name: "SMAR7 Bundle Upsell",
        short_description: "Smart, adaptive & user friendly upsells",
        app_store_url: "https://apps.shopify.com/smar7-bundle-upsell",
        website_url: "https://smar7apps.com",
        script_pattern: "js/bundle-upsell.min.js",
        category: "Sales"    
    },
    {
        name: "Abandoned Cart Reminder",
        short_description: "Bring Back Your Store Visitors with Abandoned Cart Reminds",
        app_store_url: "https://apps.shopify.com/abandoned-cart-reminder",
        website_url: "https://spur-i-t.com",
        script_pattern: "shopify-apps/abandoned-cart-reminder/js/common.js",
        category: "Sales"    
    },
    {
        name: "Gift Cards, Loyalty & Rewards",
        short_description: "Gift Card Solutions, Loyalty and Rewards, Store Credit",
        app_store_url: "https://apps.shopify.com/giftwizard",
        website_url: "https://www.giftwizard.co/",
        script_pattern: "client-nextgen.js?shop=pipoldidik.myshopify.com",
        category: "Sales"    
    },
    {
        name: "Cross Sell",
        short_description: "Hand-picked product recommendations",
        app_store_url: "https://apps.shopify.com/cross-sell",
        website_url: "https://csell.co",
        script_pattern: "assets/v2/js/core/xsell.js",
        category: "Sales"    
    },
    {
        name: "Discounted Pricing",
        short_description: "Generate more sales by offering discounts on volume pricing",
        app_store_url: "https://apps.shopify.com/discounted-pricing",
        website_url: "",
        script_pattern: "ajax/libs/jquery/1.12.0/jquery.min.js",
        category: "Sales"    
    },
    {
        name: "Product review ‑ Photo Review",
        short_description: "Review app for product reviews , photo reviews & site reviews",
        app_store_url: "https://apps.shopify.com/product-photo-reviews-by-enormapps",
        website_url: "https://www.enormapps.com",
        script_pattern: "productreviews/embed.js",
        category: "Sales"    
    },
    {
        name: "In Cart Upsell",
        short_description: "Laser targeted upsell offers in the shopping cart - no popups!",
        app_store_url: "https://apps.shopify.com/in-cart-upsell",
        website_url: "http://www.incartupsell.com",
        script_pattern: "ceadh-gqM5-Saye2WsysHBtcB-.js",
        category: "Sales"    
    },
    {
        name: "Social Proof",
        short_description: "Increase Sales & Create Urgency With SpurIT Social Proof App",
        app_store_url: "https://apps.shopify.com/social-proof-urgency",
        website_url: "https://spur-i-t.com",
        script_pattern: "shopify-extensions/social-proof/store/c54a5ad7c7b4a0069ca3eddae2a0406a.js?0.813961015628798",
        category: "Sales"    
    },
    {
        name: "Abandoned Cart Recovery",
        short_description: "Prevent abandoned orders",
        app_store_url: "https://apps.shopify.com/recover-my-cart",
        website_url: "https://recovermycart.squarespace.com/?utm_source=shopify&utm_medium=add-on-store&utm_campaign=shopify-add-on-store",
        script_pattern: "Manage//CartJS_v2",
        category: "Sales"    
    },
    {
        name: "Boost Sales‑ Upsell Cross‑sel",
        short_description: "Smart, Auto upsell & cross-sell to boost order value & sales",
        app_store_url: "https://apps.shopify.com/boost-sales",
        website_url: "https://beeketing.com",
        script_pattern: "js/beeketing.js?20180724",
        category: "Sales"    
    },
    {
        name: "Order Limits (MinMaxify)",
        short_description: "Minimum - Maximum limits on your products, groups or entire cart",
        app_store_url: "https://apps.shopify.com/order-limits-minmaxify",
        website_url: "http://www.minmaxify.com/",
        script_pattern: "limits/pipoldidik.myshopify.com",
        category: "Sales"    
    },
    {
        name: "Social Sharing Buttons",
        short_description: "Social Share and Messaging Buttons. Improve Your Communication",
        app_store_url: "https://apps.shopify.com/social-buttons",
        website_url: "https://info.zotabox.com",
        script_pattern: "a384d78e2f3e7d78c9d09a15f7f1b51e/widgets.js",
        category: "Social media"    
    },
    {
        name: "Cartback Messenger Marketing",
        short_description: "Facebook Messenger Abandoned Cart app and Messenger Marketing",
        app_store_url: "https://apps.shopify.com/fb-messenger-remarketing",
        website_url: "",
        script_pattern: "messenger/js/exit_messenger.js",
        category: "Social media"    
    },
    {
        name: "Shop Instagram",
        short_description: "Stunning Instagram galleries that sell",
        app_store_url: "https://apps.shopify.com/instagram-photos",
        website_url: "http://www.apps2grow.us/instaphotos",
        script_pattern: "files/1/0016/7591/9458/t/1/assets/ssw-libraries.js",
        category: "Social media"    
    },
    {
        name: "Instagram Feed & Gallery",
        short_description: "Top Instagram Gallery, Instagram Lookbook & Instagram Feed App",
        app_store_url: "https://apps.shopify.com/instagram-feed",
        website_url: "https://www.expertvillagemedia.com/shopify-apps/instafeed/",
        script_pattern: "instagramfeed/embed.js",
        category: "Social media"    
    },
    {
        name: "Covet.pics",
        short_description: "Lookbook, Instagram & Customer Galleries",
        app_store_url: "https://apps.shopify.com/covet-pics",
        website_url: "https://covet.pics",
        script_pattern: "embed_v1.js",
        category: "Social media"    
    },
    {
        name: "Reviews Wishlist",
        short_description: "Photos Reviews, Wishlist, Instagram, Loyalty and 7 apps in one",
        app_store_url: "https://apps.shopify.com/socialshopwave",
        website_url: "https://www.socialshopwave.com/",
        script_pattern: "scripts/socialshopwave_l_1531306320.js",
        category: "Social media"    
    },
    {
        name: "Oxi Social Login",
        short_description: "One click login with Facebook, Google and many more",
        app_store_url: "https://apps.shopify.com/oxi-social-login",
        website_url: "http://www.oxiapps.com",
        script_pattern: "api/init?shop=pipoldidik.myshopify.com",
        category: "Social media"    
    },
    {
        name: "Checkout Boost",
        short_description: "Prevent cart abandonment, boost conversions & social traffic",
        app_store_url: "https://apps.shopify.com/checkout-boost",
        website_url: "https://beeketing.com",
        script_pattern: "1.beeketing.33fe0214250771df781a.js",
        category: "Social media"    
    },
    {
        name: "Kudobuzz Testimonials and Reviews",
        short_description: "Grow your business with social reviews",
        app_store_url: "https://apps.shopify.com/kudobuzz-testimonials",
        website_url: "https://kudobuzz.com/",
        script_pattern: "js/widgetLoader.js",
        category: "Social media"    
    },
    {
        name: "AddThis Share Buttons",
        short_description: "Grow your website with free tools trusted by over 15M sites",
        app_store_url: "https://apps.shopify.com/addthis-sharing-tool",
        website_url: "https://www.addthis.com",
        script_pattern: "js/300/addthis_widget.js",
        category: "Social media"    
    },
    {
        name: "InstaShow",
        short_description: "Add Instagram images to your website to engage your visitors",
        app_store_url: "https://apps.shopify.com/instashow",
        website_url: "https://elfsight.com",
        script_pattern: "platform.js",
        category: "Social media"    
    },
    {
        name: "Shoppable Instagram",
        short_description: "Shop Instagram. Shoppable UGC. Rights Management. Anywhere.",
        app_store_url: "https://apps.shopify.com/foursixty",
        website_url: "http://www.foursixty.com",
        script_pattern: "media/scripts/fs.embed.v2.5.js",
        category: "Social media"    
    },
    {
        name: "Instagram In‑Shop",
        short_description: "Shop your instagram! Create an Instagram shop in minutes",
        app_store_url: "https://apps.shopify.com/instagram-in-shop",
        website_url: "http://instagram-shop.devcloudsoftware.com/support",
        script_pattern: "resource/resource.js?shop=pipoldidik.myshopify.com",
        category: "Social media"    
    },
    {
        name: "Smart Social Login",
        short_description: "Login with your social media accounts",
        app_store_url: "https://apps.shopify.com/smart-social-login",
        website_url: "http://webdesksolution.com",
        script_pattern: "loginwithsocialmedia//assets/scripts/custom/demo.js",
        category: "Social media"    
    },
    {
        name: "Instagram Feed + Facebook Feed",
        short_description: "Instagram gallery or Facebook feed for Instagram + Facebook",
        app_store_url: "https://apps.shopify.com/powr-social-feed",
        website_url: "https://www.powr.io",
        script_pattern: "powr.js",
        category: "Social media"    
    },
    {
        name: "Social Media Icons",
        short_description: "FREE social icons. Display social media buttons on your site!",
        app_store_url: "https://apps.shopify.com/powr-social-media-icons",
        website_url: "https://www.powr.io",
        script_pattern: "powr.js",
        category: "Social media"    
    },
    {
        name: "Instagram ‑ Instagram Feed",
        short_description: "Instagram App to Add Instagram Gallery from Instagram Account",
        app_store_url: "https://apps.shopify.com/snapzy-the-instagram-feed",
        website_url: "http://www.99ecommerceexperts.com",
        script_pattern: "instagramfeedexperts.herokuapp.com/embed.js",
        category: "Social media"    
    },
    {
        name: "Social Mobile Share Bar",
        short_description: "Free Mobile Messaging via WhatsApp, Messenger, Skype. SMS etc",
        app_store_url: "https://apps.shopify.com/mobile-messaging-social-share-bar",
        website_url: "https://info.zotabox.com/",
        script_pattern: "a384d78e2f3e7d78c9d09a15f7f1b51e/widgets.js?1532499517552",
        category: "Social media"    
    },
    {
        name: "Widgetic",
        short_description: "Facebook Like",
        app_store_url: "https://apps.shopify.com/facebook-like-by-widgetic",
        website_url: "https://widgetic.com",
        script_pattern: "sdk/sdk.js",
        category: "Social media"    
    },
    {
        name: "Twitter Feed",
        short_description: "Grow your Twitter following with a Twitter feed!",
        app_store_url: "https://apps.shopify.com/powr-twitter-feed",
        website_url: "https://www.powr.io/",
        script_pattern: "powr.js",
        category: "Social media"    
    },
    {
        name: "Yottie",
        short_description: "YouTube Video App",
        app_store_url: "https://apps.shopify.com/yottie-shopify-youtube-channel-plugin",
        website_url: "https://elfsight.com",
        script_pattern: "platform.js?shop=pipoldidik.myshopify.com",
        category: "Social media"    
    },
    {
        name: "Instagram Shop",
        short_description: "Shoppable Instagram, Instagram Feed & Instagram Look Book APP",
        app_store_url: "https://apps.shopify.com/insta-feed",
        website_url: "https://www.aaaecommerce.com",
        script_pattern: "instagram-feed/appfiles/aaa-insta-feed-script.js",
        category: "Social media"    
    },
    {
        name: "Social Media Tabs",
        short_description: "Design a Social Media Tab",
        app_store_url: "https://apps.shopify.com/social-media-tabs",
        website_url: "https://leadslide.com",
        script_pattern: "apps/leadslide-js/1/LS-19zZV-1532502759",
        category: "Social media"    
    },
    {
        name: "Open SignIn",
        short_description: "Social Login - Use any Social Network platform to login to your store",
        app_store_url: "https://apps.shopify.com/open-signin",
        website_url: "",
        script_pattern: "customer/modal",
        category: "Social media"    
    },
    {
        name: "Twitter Feed",
        short_description: "Responsive Widget to display tweets, follow button",
        app_store_url: "https://apps.shopify.com/twitter-feed",
        website_url: "https://www.zestard.com",
        script_pattern: "zestard_tweet_feed.js",
        category: "Social media"    
    },
    {
        name: "Facebook Chat Box",
        short_description: "Live chat with customers via Facebook Messenger",
        app_store_url: "https://apps.shopify.com/facebook-chat-box",
        website_url: "https://autoketing.com",
        script_pattern: "dist/fb-chat-embed.js",
        category: "Social media"    
    },
    {
        name: "Instagram Shoppable Feed",
        short_description: "Add to website shoppable Instagram photos with tagged items",
        app_store_url: "https://apps.shopify.com/elfsight-shoppable-feed",
        website_url: "https://elfsight.com",
        script_pattern: "assets/elfsight.shoppable.js",
        category: "Social media"    
    },
    {
        name: "Like Button Rating",
        short_description: "Get tons of likes and boost sharing",
        app_store_url: "https://apps.shopify.com/like-button-rating",
        website_url: "https://likebtn.com",
        script_pattern: "js/w/widget.js",
        category: "Social media"    
    },
    {
        name: "Instagram Feed",
        short_description: "Add aliveness to your store by integrating Instagram's feeds",
        app_store_url: "https://apps.shopify.com/instagram-feed-by-sketch-themes",
        website_url: "",
        script_pattern: "live/instagram_feeds/js/instaapp_loadn.js",
        category: "Social media"    
    },
    {
        name: "Instagram Shop Feed",
        short_description: "Make your Instagram Feed Shop-able",
        app_store_url: "https://apps.shopify.com/dev-instagram-sell-1",
        website_url: "http://sprbot.com/instashop/",
        script_pattern: "instagram-sell/ins-shop.js",
        category: "Social media"    
    },
    {
        name: "TagTray",
        short_description: "Shop Galleries Of Customer Generated Social Media Photos",
        app_store_url: "https://apps.shopify.com/tagtray",
        website_url: "https://www.tagtray.com/",
        script_pattern: "v3/tagtray.js",
        category: "Social media"    
    },
    {
        name: "Facebook Image Gallery",
        short_description: "Awesome & dynamic image gallery for your Facebook pictures",
        app_store_url: "https://apps.shopify.com/facebook-image-gallery",
        website_url: "https://www.codeblackbelt.com",
        script_pattern: "js/modules/facebook-image-gallery/main.min.js",
        category: "Social media"    
    },
    {
        name: "Shareable Cart",
        short_description: "Makes your cart shareable and transferrable between devices",
        app_store_url: "https://apps.shopify.com/portable-cart",
        website_url: "https://customerfirstfocus.com/",
        script_pattern: "cff.production.min.js",
        category: "Social media"    
    },
    {
        name: "Instagram",
        short_description: "Instagram pic in slider & grid in instagram",
        app_store_url: "https://apps.shopify.com/greenfrog-instashow",
        website_url: "https://greenfrogweb.com",
        script_pattern: "instashow/instashow.js",
        category: "Social media"    
    },
    {
        name: "Social Caller",
        short_description: "Social Caller gives you a hand, to increase your inbound calls",
        app_store_url: "https://apps.shopify.com/social-caller",
        website_url: "https://roartheme.com/",
        script_pattern: "socialcaller/lib/assets/socialcaller.js?1532513013&shop=pipoldidik.myshopify.com",
        category: "Social media"    
    },
    {
        name: "Facebook Chat",
        short_description: "Live chat with your customers using Facebook Messenger",
        app_store_url: "https://apps.shopify.com/facebook-live-chat",
        website_url: "https://beeketing.com/contact",
        script_pattern: "1.beeketing.2818b52aa5a936e219c8.js",
        category: "Customer service"    
    },
    {
        name: "Wishlist Plus",
        short_description: "Help your customers pick up where they left off",
        app_store_url: "https://apps.shopify.com/swym-relay",
        website_url: "http://swym.it",
        script_pattern: "code/swym-shopify.js",
        category: "Customer service"    
    },
    {
        name: "Easy Contact Form",
        short_description: "Free Stylish, Responsive Contact Form. Unlimited Submissions",
        app_store_url: "https://apps.shopify.com/better-contact-form-1",
        website_url: "https://info.zotabox.com",
        script_pattern: "a/3/a384d78e2f3e7d78c9d09a15f7f1b51e/widgets.js",
        category: "Customer service"    
    },
    {
        name: "HelpCenter",
        short_description: "Build an Attractive FAQs Page",
        app_store_url: "https://apps.shopify.com/helpcenter",
        website_url: "",
        script_pattern: "recaptcha/api2/v1531759913576/recaptcha__en.js",
        category: "Customer service"    
    },
    {
        name: "Tidio Live Chat",
        short_description: "Live chat boosted with Bots and Marketing Automation",
        app_store_url: "https://apps.shopify.com/tidio-chat",
        website_url: "http://www.tidiochat.com",
        script_pattern: "1_0_3/static/js/render.9d38c0e4a0866fbf5663.js",
        category: "Customer service"    
    },
    {
        name: "Abandonment Protector",
        short_description: "Email marketing automation & Popups with Exit intent",
        app_store_url: "https://apps.shopify.com/linkerfriend-lead-management-tools",
        website_url: "https://www.chilliapps.com",
        script_pattern: "main/chpmgr.js",
        category: "Customer service"    
    },
    {
        name: "Improved Contact Form",
        short_description: "Contact Us Page Generator and Popup Contact Widget",
        app_store_url: "https://apps.shopify.com/improved-contact-form",
        website_url: "https://www.awio.com",
        script_pattern: "ws/loader/?shop=pipoldidik.myshopify.com",
        category: "Customer service"    
    },
    {
        name: "WhatsHelp Chat Button",
        short_description: "Chat with website visitors via popular Messaging Apps",
        app_store_url: "https://apps.shopify.com/whatshelp-chat-button",
        website_url: "https://whatshelp.io/widget",
        script_pattern: "widget-send-button/js/init.js",
        category: "Customer service"    
    },
    {
        name: "Facebook Live Chat",
        short_description: "Customer Support via Facebook Live Chat",
        app_store_url: "https://apps.shopify.com/facebook-messenger-live-chat",
        website_url: "https://info.zotabox.com",
        script_pattern: "sdk/xfbml.customerchat.js#xfbml=1&version=v2.11",
        category: "Customer service"    
    },
    {
        name: "Chatra Live Chat",
        short_description: "Live chat and Facebook chat for your store",
        app_store_url: "https://apps.shopify.com/chatra",
        website_url: "https://chatra.io",
        script_pattern: "shopify?chatraId=EZY6tASJdNaeCsgXY",
        category: "Customer service"    
    },
    {
        name: "Simple Contact Us Form",
        short_description: "Take Less Than 2 Minutes to Get In Touch With Your Customers",
        app_store_url: "https://apps.shopify.com/contact-us-by-hulkapps",
        website_url: "https://www.hulkcode.com",
        script_pattern: "skeletopapp.js",
        category: "Customer service"    
    },
    {
        name: "Form Builder",
        short_description: "Form Builder App with Custom Registration Form and Order Form",
        app_store_url: "https://apps.shopify.com/form-builder",
        website_url: "https://www.aaaecommerce.com/",
        script_pattern: "formbuilder/appfiles/aaa_form_builder_script_minify.js",
        category: "Customer service"    
    },
    {
        name: "Zendesk Support",
        short_description: "Omnichannel customer service and engagement platform",
        app_store_url: "https://apps.shopify.com/zendesk",
        website_url: "https://www.zendesk.com",
        script_pattern: "s/files/1/0016/7591/9458/t/1/assets/zendesk-embeddable.js",
        category: "Customer service"    
    },
    {
        name: "Re:amaze Live Chat & Helpdesk",
        short_description: "Customer support helpdesk with live chat, ticketing, and FAQ",
        app_store_url: "https://apps.shopify.com/reamaze",
        website_url: "https://www.reamaze.com",
        script_pattern: "reamaze.com/assets/reamaze.js",
        category: "Customer service"    
    },
    {
        name: "Orderify",
        short_description: "Let customers edit, cancel and reorder instantly",
        app_store_url: "https://apps.shopify.com/orderify",
        website_url: "https://customerfirstfocus.com",
        script_pattern: "cffOrderEdit.production.min.js",
        category: "Customer service"    
    },
    {
        name: "Product Questions and Answers",
        short_description: "Helps you create Product Specific FAQ Section on Product Pages",
        app_store_url: "https://apps.shopify.com/simp-questions-and-answers",
        website_url: "https://simprosys.com",
        script_pattern: "ajax/libs/jquery/2.1.4/jquery.min.js",
        category: "Customer service"    
    },
    {
        name: "Ultimate FAQ",
        short_description: "A feature-rich and complete FAQ solution",
        app_store_url: "https://apps.shopify.com/ultimate-faqs",
        website_url: "https://www.etoilewebdesign.com",
        script_pattern: "shopify-testing/FrontEnd/js/ewd-ufaq-js.js",
        category: "Customer service"    
    },
    {
        name: "Live Chat",
        short_description: "Live chat provides a fast way to connect with customers",
        app_store_url: "https://apps.shopify.com/zendeskchatplus",
        website_url: "http://help.combidesk.com/instruction-manuals/shopify/instruction-manual-shopify-zendesk-chat-integration-formerly-zopim",
        script_pattern: "js/integration/shopify/zopim/widget.js",
        category: "Customer service"    
    },
    {
        name: "Facebook Chat",
        short_description: "Turn your visitors into your customers with Facebook Messenger",
        app_store_url: "https://apps.shopify.com/facebook-chat-2-0",
        website_url: "",
        script_pattern: "chat/loader?cache=3711665326&user_id=2922&shop=pipoldidik.myshopify.com",
        category: "Customer service"    
    },
    {
        name: "Pure Chat",
        short_description: "Easy-to-use live chat software with unlimited users and chats",
        app_store_url: "https://apps.shopify.com/pure-chat",
        website_url: "https://www.purechat.com/",
        script_pattern: "shopify/ShopifySnippet?widgetId=5e772704-f3b8-4a89-b767-a18328d29a06&shop=pipoldidik.myshopify.com",
        category: "Customer service"    
    },
    {
        name: "Jivo Omnichannel Suite",
        short_description: "Finally! Chats, FB messages, calls & emails, all in one app",
        app_store_url: "https://apps.shopify.com/jivochat",
        website_url: "https://www.jivochat.com/",
        script_pattern: "script/widget/hJcGpURH4C?shop=pipoldidik.myshopify.com",
        category: "Customer service"    
    },
    {
        name: "Custom Order Status",
        short_description: "Create and manage the status of your orders",
        app_store_url: "https://apps.shopify.com/ultimate-order-status",
        website_url: "http://www.w3trends.com",
        script_pattern: "js/orderlookup.js",
        category: "Customer service"    
    },
    {
        name: "Product Fees and Charges",
        short_description: "Add extra fees to incease your sales and average order value",
        app_store_url: "https://apps.shopify.com/product-fees",
        website_url: "https://appstore.mageworx.com/",
        script_pattern: "productfees/source.js",
        category: "Customer service"    
    },
    {
        name: "Easy Google Customer Reviews",
        short_description: "Add Google Customer Reviews to your site, no coding required!",
        app_store_url: "https://apps.shopify.com/easy-google-customer-reviews",
        website_url: "https://unionworks.co.uk/shopify-apps/easy-google-customer-reviews/support",
        script_pattern: "scripts/google-customer-reviews-badge.js?shop=pipoldidik.myshopify.com",
        category: "Customer service"    
    },
    {
        name: "Intercom",
        short_description: "Catch, convert and keep more customers with modern live chat",
        app_store_url: "https://apps.shopify.com/intercom",
        website_url: "http://intercom.com",
        script_pattern: "shim.f772198b.js",
        category: "Customer service"    
    },
    {
        name: "Free Call",
        short_description: "Service for Direct Sales",
        app_store_url: "https://apps.shopify.com/free-call",
        website_url: "https://www.freecallinc.com",
        script_pattern: "freecall_trackdiv1.js?company_id=56483&site_id=54667&js_enabled=1&phpsessid_js=1532540951689xumteit8o4acyrz6rg3&is_first_js=1&psid=1532540951689xumteit8o4acyrz6rg3|1|||||||&http_referer_js=https://pipoldidik.myshopify.com/&title=PipolDidik&uid=&uml=&unm=&cnm=&wixpageTitle=&wixurl=&wixreferer=&enc=UTF-8&plng=en&globid=21221532540807&timestamp=1532540951700",
        category: "Customer service"    
    },
    {
        name: "Tracking Genie",
        short_description: "Tracking set on autopilot",
        app_store_url: "https://apps.shopify.com/trackinggenie",
        website_url: "http://www.twozillas.com",
        script_pattern: "app/app.js",
        category: "Customer service"    
    },
    {
        name: "Facebook Live Chat and Tracking",
        short_description: "Chat with your shoppers via Facebook Messenger",
        app_store_url: "https://apps.shopify.com/facebook-messenger-live-chat-tracking",
        website_url: "https://roartheme.com",
        script_pattern: "fblivechat/lib/asset/script.js?1532542457&shop=pipoldidik.myshopify.com",
        category: "Customer service"    
    },
    {
        name: "Survey",
        short_description: "Customizable surveys for collecting customer feedback",
        app_store_url: "https://apps.shopify.com/powr-survey",
        website_url: "https://www.powr.io",
        script_pattern: "powr.js",
        category: "Customer service"    
    },
    {
        name: "Returns Management System",
        short_description: "Handle Return Requests & send Prepaid Shipping Labels",
        app_store_url: "https://apps.shopify.com/return-management-system",
        website_url: "https://spicegems.com",
        script_pattern: "assets/embedOrderLookup.js",
        category: "Customer service"    
    },
    {
        name: "Raven Callback Request",
        short_description: "Turn website visitors into qualified sales calls",
        app_store_url: "https://apps.shopify.com/raven",
        website_url: "http://raven-callback.webflow.io",
        script_pattern: "api/widget/raven-script/pipoldidik/raven-widget.js",
        category: "Customer service"    
    },
    {
        name: "Formilla Live Chat",
        short_description: "Live chat with visitors in real-time",
        app_store_url: "https://apps.shopify.com/formilla-live-chat",
        website_url: "https://www.formilla.com",
        script_pattern: "scripts/loadFormilla.js?guid=csfef828-ca8f-4234-b152-c26c8f6fdd96&shop=pipoldidik.myshopify.com",
        category: "Customer service"    
    },
    {
        name: "Powerful Form Builder",
        short_description: "Create any kind of custom form with Powerful Form Builder app",
        app_store_url: "https://apps.shopify.com/powerful-form-builder",
        website_url: "http://www.globosoftware.net",
        script_pattern: "s/files/1/0016/7591/9458/t/1/assets/globoformbuilder_init.js?shop=pipoldidik.myshopify.com",
        category: "Customer service"    
    },
    {
        name: "Delivery Date Range",
        short_description: "Display the estimated delivery date range on the product page",
        app_store_url: "https://apps.shopify.com/delivery-date-range",
        website_url: "http://www.ecomstoreapps.com",
        script_pattern: "assets/ddr_embed.js?ddr_token=3d55a85a-5d3a-4260-8358-d0628f46716f&shop=pipoldidik.myshopify.com",
        category: "Customer service"    
    },
    {
        name: "Custom Contact Forms",
        short_description: "Smart Contact Form Builder",
        app_store_url: "https://apps.shopify.com/contact-forms-1",
        website_url: "https://eastsideco.com",
        script_pattern: "widget/2.10.2/uploadcare/uploadcare.full.min.js",
        category: "Customer service"    
    },
    {
        name: "Wholesale Simplified",
        short_description: "Merchants can offer discounts to different customer groups",
        app_store_url: "https://apps.shopify.com/wholesale-simplified",
        website_url: "http://support.solvercircle.com",
        script_pattern: "wholesale-simplified/scripts/js/sc_ws_jquery.min.js",
        category: "Customer service"    
    },
    {
        name: "Maps",
        short_description: "Add Google Maps with store locations to your Shopify store",
        app_store_url: "https://apps.shopify.com/maps-by-develic",
        website_url: "https://www.develic.com/",
        script_pattern: "packs/front.js",
        category: "Customer service"    
    },
    {
        name: "Estimated Delivery Date",
        short_description: "Displays the estimated delivery date on the product page",
        app_store_url: "https://apps.shopify.com/estimated-delivery-date",
        website_url: "http://www.estimateddelivery.com",
        script_pattern: "assets/js/countdown/moment.js",
        category: "Customer service"    
    },
    {
        name: "Easy GDPR",
        short_description: "Get GDPR compliant with 1 click. Cookie bar",
        app_store_url: "https://apps.shopify.com/easy-gdpr",
        website_url: "https://www.easygdpr.io",
        script_pattern: "gdpr.js",
        category: "Customer service"    
    }
];
