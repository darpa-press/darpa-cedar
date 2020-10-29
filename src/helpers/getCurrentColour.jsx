import cal from "calendrier-republicain"

export default () => {
    const day = cal.dayOfYearNameEn(new Date())
    const colour = colours[day] ? colours[day] : "#444"
    return colour
}

const colours = {
    grape: "#B8B5A5",
    saffron: "#D1ACA9",
    chestnut: "#B7A594",
    crocus: "#7B7171",
    horse: "#A39F8F",
    impatiens: "#885F5F",
    carrot: "#DFC0A7",
    amaranth: "#B49B7E",
    parsnip: "#CFC7AB",
    vat: "#D7CBCB",
    potato: "#D3B791",
    strawflower: "#8E6C4F",
    "winter squash": "#A78E6F",
    mignonette: "#AFA194",
    donkey: "#83826D",
    "four o'clock flower": "#7F7055",
    pumpkin: "#CC9467",
    buckwheat: "#9C806B",
    sunflower: "#918E5D",
    "wine-press": "#CCBFB5",
    hemp: "#96AC7B",
    peach: "#E1AF90",
    turnip: "#C7BEB4",
    amaryllis: "#8E6D65",
    ox: "#928E73",
    eggplant: "#A9A1A5",
    "chili pepper": "#D0A49C",
    tomato: "#DC9385",
    barley: "#B69F78",
    barrel: "#A8907C",
    apple: "#CFB2AD",
    celery: "#C1CFA4",
    pear: "#D9D7AF",
    beetroot: "#B69A93",
    goose: "#929685",
    heliotrope: "#6D6570",
    "common fig": "#85826A",
    "black salsify": "#948F79",
    "chequer tree": "#6B714D",
    plough: "#BCAEA7",
    salsify: "#948A73",
    "water chestnut": "#ADA397",
    "jerusalem artichoke": "#A7917A",
    endive: "#BEB797",
    turkey: "#89836F",
    skirret: "#737659",
    watercress: "#9DAE88",
    leadworts: "#586F5C",
    pomegranate: "#BD8B8A",
    harrow: "#898275",
    baccharis: "#737755",
    azarole: "#7F6743",
    madder: "#957653",
    orange: "#F2BE80",
    pheasant: "#958D77",
    pistachio: "#D2C6A4",
    "tuberous pea": "#7A7658",
    quince: "#B5A277",
    "service tree": "#6F815F",
    roller: "#BAB7B1",
    rampion: "#868F74",
    chicory: "#818B7D",
    medlar: "#847952",
    pig: "#A99B8C",
    "lamb's lettuce": "#82A26A",
    cauliflower: "#CFD1B6",
    honey: "#E1BA85",
    juniper: "#929F89",
    pickaxe: "#E4E3E1",
    wax: "#DBBDAB",
    horseradish: "#CABFA7",
    "cedar tree": "#7B8A74",
    fir: "#81917E",
    "roe deer": "#958B63",
    gorse: "#807841",
    "cypress tree": "#71836F",
    ivy: "#C0CDB6",
    "savin juniper": "#7B8C61",
    "grub-hoe": "#D8D5D0",
    "sugar maple": "#92744D",
    heather: "#816D69",
    "reed plant": "#7C8863",
    sorrel: "#8A9566",
    cricket: "#8A9261",
    "pine nut": "#C1AD92",
    cork: "#C89B72",
    truffle: "#A59C93",
    olive: "#C0BFA4",
    shovel: "#E9E7E4",
    peat: "#797066",
    coal: "#706E6E",
    bitumen: "#676A6B",
    sulphur: "#B5AB69",
    dog: "#B2AE97",
    lava: "#63392F",
    topsoil: "#67584C",
    manure: "#797564",
    saltpeter: "#958F8B",
    flail: "#E3E1DE",
    granite: "#8C8784",
    clay: "#9C877C",
    slate: "#626467",
    sandstone: "#AD907E",
    rabbit: "#ABAB8B",
    flint: "#999088",
    marl: "#93908A",
    limestone: "#A29F94",
    marble: "#C7C5C7",
    "winnowing basket": "#B7A491",
    gypsum: "#9F9C98",
    salt: "#8E8889",
    iron: "#C7CAD0",
    copper: "#BC8A74",
    cat: "#A99C92",
    tin: "#B4B4B1",
    lead: "#828386",
    zinc: "#9E9F9F",
    mercury: "#5D5551",
    sieve: "#D4D2CF",
    "spurge-laurel": "#63754B",
    moss: "#5A7733",
    "butcher's broom": "#8A9176",
    snowdrop: "#72795E",
    bull: "#898B7D",
    laurustinus: "#696D4F",
    "tinder polypore": "#6A695C",
    "daphne mezereum": "#7E7162",
    poplar: "#8FA093",
    axe: "#E5E0DA",
    hellebore: "#676353",
    broccoli: "#9FB38C",
    "bay laurel": "#798A5E",
    filbert: "#AA8467",
    cow: "#959B84",
    "box tree": "#72825C",
    lichen: "#747353",
    "yew tree": "#63634D",
    lungwort: "#676F63",
    billhook: "#C8CBC4",
    pennycress: "#71834C",
    "rose daphne": "#785C5A",
    "couch grass": "#6C8F5D",
    "common knotgrass": "#6E7951",
    hare: "#918C5C",
    woad: "#768251",
    hazel: "#9A8778",
    cyclamen: "#85706D",
    celandine: "#5D7829",
    sleigh: "#C8B6B3",
    coltsfoot: "#8E824C",
    dogwood: "#838073",
    matthiola: "#958686",
    privet: "#5B734A",
    billygoat: "#939581",
    "wild ginger": "#617D50",
    "italian buckthorn": "#6C7558",
    violet: "#784891",
    "goat willow": "#828F72",
    spade: "#F1F1F0",
    narcissus: "#6F7053",
    elm: "#899D82",
    "common fumitory": "#788159",
    "hedge mustard": "#61784A",
    goat: "#96937B",
    spinach: "#9CB381",
    doronicum: "#657330",
    pimpernel: "#826F47",
    chervil: "#ACC290",
    twine: "#D7CCBF",
    mandrake: "#AFA490",
    parsley: "#B9D1A5",
    "scurvy-grass": "#778062",
    daisy: "#8A8D81",
    tuna: "#93AEC0",
    dandelion: "#809263",
    "wood anemone": "#5C6B47",
    "maidenhair fern": "#6F884A",
    "ash tree": "#8C9D87",
    dibber: "#E6E6DD",
    primrose: "#797D4B",
    "plane tree": "#79875C",
    asparagus: "#B5BB97",
    tulip: "#BAA69B",
    hen: "#D0C5B2",
    chard: "#828A69",
    birch: "#878D73",
    daffodil: "#B0AA70",
    alder: "#89987C",
    hatchery: "#847C69",
    periwinkle: "#696B79",
    hornbeam: "#718054",
    morel: "#746D51",
    "beech tree": "#778060",
    bee: "#CEBD9F",
    lettuce: "#ACC183",
    larch: "#717F69",
    hemlock: "#60724D",
    radish: "#C6BDAD",
    hive: "#C0A366",
    "judas tree": "#8A7474",
    "romaine lettuce": "#B1BF8C",
    "horse chestnut": "#83895A",
    "arugula or rocket": "#98B38B",
    pigeon: "#AEADA9",
    lilac: "#7C6F82",
    anemone: "#686062",
    pansy: "#645A5A",
    bilberry: "#899687",
    "grafting knife": "#D9D5D1",
    rose: "#B08880",
    "oak tree": "#909679",
    fern: "#88A66C",
    hawthorn: "#7E7152",
    nightingale: "#8B9272",
    "common columbine": "#667455",
    "lily of the valley": "#536D3F",
    "button mushroom": "#C8C1B8",
    hyacinth: "#7B717E",
    rake: "#F3F3F1",
    rhubarb: "#B7A291",
    sainfoin: "#7B8157",
    wallflower: "#856734",
    "fan palm tree": "#7D8A6C",
    silkworm: "#91997B",
    comfrey: "#6A8559",
    "salad burnet": "#70985D",
    "basket of gold": "#9A8D31",
    orache: "#728554",
    "garden hoe": "#F6F5F4",
    thrift: "#796E66",
    fritillary: "#7A7447",
    borage: "#788273",
    valerian: "#888F7D",
    carp: "#9A957E",
    "spindle (shrub)": "#706C50",
    chive: "#B3BEA4",
    bugloss: "#768065",
    "wild mustard": "#728051",
    "shepherd's crook": "#EAE8E4",
    alfalfa: "#87A67A",
    daylily: "#7D6330",
    clover: "#72AF6F",
    angelica: "#6C8155",
    duck: "#9E9E8B",
    "lemon balm": "#80AC62",
    "oat grass": "#738763",
    "martagon lily": "#7D7E4E",
    "wild thyme": "#8D946F",
    scythe: "#DCDCD9",
    strawberry: "#D59E90",
    woundwort: "#6D6B6C",
    pea: "#B4C797",
    acacia: "#8E906A",
    quail: "#928E78",
    carnation: "#CB9A9C",
    elderberry: "#8C9675",
    "poppy plant": "#80674E",
    "linden or lime tree": "#70804D",
    pitchfork: "#E4E3E3",
    cornflower: "#818BA4",
    camomile: "#B2B69C",
    honeysuckle: "#5C673A",
    bedstraw: "#597137",
    tench: "#7F8062",
    jasmine: "#A9B7B6",
    verbena: "#73676A",
    thyme: "#BCC5AB",
    peony: "#987D7C",
    "hand cart": "#DFE1DD",
    rye: "#B2A58D",
    oat: "#C8B495",
    onion: "#D1ADA6",
    speedwell: "#5C704F",
    mule: "#868478",
    rosemary: "#BBC3B1",
    cucumber: "#B4C6A3",
    shallot: "#C2A5A1",
    wormwood: "#889880",
    sickle: "#E6E5E2",
    coriander: "#B6CA9A",
    artichoke: "#B3BA9F",
    clove: "#A99A93",
    lavender: "#A08FA6",
    chamois: "#797E7E",
    tobacco: "#A6937B",
    redcurrant: "#A3714C",
    "hairy vetchling": "#75835A",
    cherry: "#D9BDB9",
    park: "#697950",
    mint: "#9AB882",
    cumin: "#BAA48B",
    bean: "#C0A393",
    alkanet: "#707D62",
    "guinea fowl": "#777E57",
    "sage plant": "#6F8569",
    garlic: "#D6CEC3",
    tare: "#78726E",
    wheat: "#C0A980",
    shawm: "#ABA199",
    spelt: "#AF9373",
    "common mullein": "#787E59",
    melon: "#DAC8A4",
    ryegrass: "#6A9040",
    ram: "#AAB1A9",
    horsetail: "#657C42",
    mugwort: "#6F9160",
    safflower: "#857949",
    blackberry: "#8A8E8F",
    "watering can": "#BBC6BA",
    switchgrass: "#727D5F",
    "common glasswort": "#7A7F57",
    apricot: "#EBC497",
    basil: "#98B27F",
    ewe: "#858C6F",
    marshmallow: "#B4B1B0",
    flax: "#7E897D",
    almond: "#C8A687",
    gentian: "#777F70",
    lock: "#BFBCAC",
    "carline thistle": "#727648",
    caper: "#B3A993",
    lentil: "#A88C73",
    inula: "#5D6D2F",
    otter: "#74776E",
    myrtle: "#6E7356",
    rapeseed: "#979956",
    lupin: "#ADA095",
    cotton: "#8A8E94",
    mill: "#777B77",
    plum: "#B29E97",
    millet: "#B69E77",
    puffball: "#6A6957",
    "six-row barley": "#A69B7D",
    salmon: "#C2B1A7",
    tuberose: "#6F7961",
    "winter barley": "#8D8A63",
    apocynum: "#4E6B36",
    liquorice: "#9C9792",
    ladder: "#E6E5E3",
    watermelon: "#C8A38D",
    fennel: "#CBCFB0",
    barberry: "#7E6755",
    walnut: "#C2AC8F",
    trout: "#B5AFA4",
    lemon: "#E7D995",
    teasel: "#727355",
    buckthorn: "#60764F",
    "mexican marigold": "#8B772D",
    "harvesting basket": "#928B76",
    "wild rose": "#969085",
    hazelnut: "#C3A78E",
    hops: "#91A16B",
    sorghum: "#898365",
    crayfish: "#AA9F96",
    "bitter orange": "#A28752",
    goldenrod: "#7A834D",
    "maize or corn": "#B09867",
    "sweet chestnut": "#6C7647",
    "pack basket": "#9F9889",
}
