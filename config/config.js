const config = {
    app_name: 'Chia Friends',
    app_description: '10,000 eco-bit NFTs on Chia, from Chia.',
    collection_file_name: 'collection.json',
    collection_contract_address: 'xch',
    collection_name: 'Chia Friends Collections',
    collection_description: '10,000 eco-bit NFTs on Chia, from Chia.',
    collection_id_from: 1,
    ignore_traits: ['date'], 
    sqlite_file_name: 'database.sqlite',
    ga: 'G-BW69Z04YTP',
    main_og_image: 'https://onedaypunk-rarity-tool.herokuapp.com/images/og.png',
    item_path_name: 'Friends',
    page_item_num: 60,
    content_image_is_video: false,
    content_image_frame: 'rectangle', // circle, rectangle
    use_wallet: false
};

module.exports = config;