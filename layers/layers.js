var wms_layers = [];


        var lyr_DarkGray_0 = new ol.layer.Tile({
            'title': 'Dark Gray',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_koethen_kernstadt_u_ortschaften_1 = new ol.format.GeoJSON();
var features_koethen_kernstadt_u_ortschaften_1 = format_koethen_kernstadt_u_ortschaften_1.readFeatures(json_koethen_kernstadt_u_ortschaften_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_koethen_kernstadt_u_ortschaften_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_koethen_kernstadt_u_ortschaften_1.addFeatures(features_koethen_kernstadt_u_ortschaften_1);
var lyr_koethen_kernstadt_u_ortschaften_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_koethen_kernstadt_u_ortschaften_1, 
                style: style_koethen_kernstadt_u_ortschaften_1,
                popuplayertitle: 'koethen_kernstadt_u_ortschaften',
                interactive: false,
                title: 'koethen_kernstadt_u_ortschaften'
            });
var format_Erreichbarkeit_Kultureinrichtungen_2 = new ol.format.GeoJSON();
var features_Erreichbarkeit_Kultureinrichtungen_2 = format_Erreichbarkeit_Kultureinrichtungen_2.readFeatures(json_Erreichbarkeit_Kultureinrichtungen_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Erreichbarkeit_Kultureinrichtungen_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Erreichbarkeit_Kultureinrichtungen_2.addFeatures(features_Erreichbarkeit_Kultureinrichtungen_2);
var lyr_Erreichbarkeit_Kultureinrichtungen_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Erreichbarkeit_Kultureinrichtungen_2, 
                style: style_Erreichbarkeit_Kultureinrichtungen_2,
                popuplayertitle: 'Erreichbarkeit_Kultureinrichtungen',
                interactive: true,
    title: 'Erreichbarkeit_Kultureinrichtungen<br />\
    <img src="styles/legend/Erreichbarkeit_Kultureinrichtungen_2_0.png" /> 5<br />\
    <img src="styles/legend/Erreichbarkeit_Kultureinrichtungen_2_1.png" /> 10<br />\
    <img src="styles/legend/Erreichbarkeit_Kultureinrichtungen_2_2.png" /> 15<br />\
    <img src="styles/legend/Erreichbarkeit_Kultureinrichtungen_2_3.png" /> <br />' });
var format_Kultureinrichtungen_u_kirche_3 = new ol.format.GeoJSON();
var features_Kultureinrichtungen_u_kirche_3 = format_Kultureinrichtungen_u_kirche_3.readFeatures(json_Kultureinrichtungen_u_kirche_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kultureinrichtungen_u_kirche_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kultureinrichtungen_u_kirche_3.addFeatures(features_Kultureinrichtungen_u_kirche_3);
var lyr_Kultureinrichtungen_u_kirche_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kultureinrichtungen_u_kirche_3, 
                style: style_Kultureinrichtungen_u_kirche_3,
                popuplayertitle: 'Kultureinrichtungen_u_kirche',
                interactive: false,
    title: 'Kultureinrichtungen_u_kirche<br />\
    <img src="styles/legend/Kultureinrichtungen_u_kirche_3_0.png" /> Kino<br />\
    <img src="styles/legend/Kultureinrichtungen_u_kirche_3_1.png" /> Bibliothek<br />\
    <img src="styles/legend/Kultureinrichtungen_u_kirche_3_2.png" /> Religiöse Einrichtung<br />\
    <img src="styles/legend/Kultureinrichtungen_u_kirche_3_3.png" /> Rathaus<br />\
    <img src="styles/legend/Kultureinrichtungen_u_kirche_3_4.png" /> Sehenswürdigkeit<br />' });
var group_POIs = new ol.layer.Group({
                                layers: [lyr_Kultureinrichtungen_u_kirche_3,],
                                fold: 'close',
                                title: 'POIs'});
var group_Buildings_spatialJoin = new ol.layer.Group({
                                layers: [lyr_Erreichbarkeit_Kultureinrichtungen_2,],
                                fold: 'close',
                                title: 'Buildings_spatial Join'});
var group_Stadt_u_Stadtteile = new ol.layer.Group({
                                layers: [lyr_koethen_kernstadt_u_ortschaften_1,],
                                fold: 'open',
                                title: 'Stadt_u_Stadtteile'});

lyr_DarkGray_0.setVisible(true);lyr_koethen_kernstadt_u_ortschaften_1.setVisible(true);lyr_Erreichbarkeit_Kultureinrichtungen_2.setVisible(true);lyr_Kultureinrichtungen_u_kirche_3.setVisible(true);
var layersList = [lyr_DarkGray_0,group_Stadt_u_Stadtteile,group_Buildings_spatialJoin,group_POIs];
lyr_koethen_kernstadt_u_ortschaften_1.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'class': 'class', 'type': 'type', 'name': 'name', 'address': 'address', 'extratags': 'extratags', });
lyr_Erreichbarkeit_Kultureinrichtungen_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'building': 'building', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'name_2': 'name_2', 'Erreichbarkeit (Min)': 'Erreichbarkeit (Min)', 'kultur_AA_MODE': 'kultur_AA_MODE', });
lyr_Kultureinrichtungen_u_kirche_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'tourism': 'tourism', 'ref': 'ref', 'operator': 'operator', 'description': 'description', 'contact:facebook': 'contact:facebook', 'checkpoint:type': 'checkpoint:type', 'checkpoint': 'checkpoint', 'toilets:wheelchair': 'toilets:wheelchair', 'museum': 'museum', 'contact:website': 'contact:website', 'contact:phone': 'contact:phone', 'contact:email': 'contact:email', 'width': 'width', 'entrance': 'entrance', 'comment': 'comment', 'service_times': 'service_times', 'check_date': 'check_date', 'ref:isil': 'ref:isil', 'opening_hours': 'opening_hours', 'email': 'email', 'building': 'building', 'designation': 'designation', 'natural': 'natural', 'height': 'height', 'wikidata': 'wikidata', 'website': 'website', 'religion': 'religion', 'phone': 'phone', 'denomination': 'denomination', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:country': 'addr:country', 'addr:city': 'addr:city', 'wikimedia_commons': 'wikimedia_commons', 'ref:lda': 'ref:lda', 'man_made': 'man_made', 'lda:criteria': 'lda:criteria', 'image': 'image', 'heritage:operator': 'heritage:operator', 'heritage': 'heritage', 'wheelchair': 'wheelchair', 'name': 'name', });
lyr_koethen_kernstadt_u_ortschaften_1.set('fieldImages', {'fid': '', 'osm_id': '', 'class': '', 'type': '', 'name': '', 'address': '', 'extratags': '', });
lyr_Erreichbarkeit_Kultureinrichtungen_2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'building': 'TextEdit', 'addr:street': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'name_2': 'TextEdit', 'Erreichbarkeit (Min)': 'Range', 'kultur_AA_MODE': 'TextEdit', });
lyr_Kultureinrichtungen_u_kirche_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'tourism': '', 'ref': '', 'operator': '', 'description': '', 'contact:facebook': '', 'checkpoint:type': '', 'checkpoint': '', 'toilets:wheelchair': '', 'museum': '', 'contact:website': '', 'contact:phone': '', 'contact:email': '', 'width': '', 'entrance': '', 'comment': '', 'service_times': '', 'check_date': '', 'ref:isil': '', 'opening_hours': '', 'email': '', 'building': '', 'designation': '', 'natural': '', 'height': '', 'wikidata': '', 'website': '', 'religion': '', 'phone': '', 'denomination': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:country': '', 'addr:city': '', 'wikimedia_commons': '', 'ref:lda': '', 'man_made': '', 'lda:criteria': '', 'image': '', 'heritage:operator': '', 'heritage': '', 'wheelchair': '', 'name': '', });
lyr_koethen_kernstadt_u_ortschaften_1.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'class': 'no label', 'type': 'no label', 'name': 'no label', 'address': 'no label', 'extratags': 'no label', });
lyr_Erreichbarkeit_Kultureinrichtungen_2.set('fieldLabels', {'fid': 'hidden field', 'full_id': 'hidden field', 'osm_id': 'hidden field', 'building': 'hidden field', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'name_2': 'inline label - visible with data', 'Erreichbarkeit (Min)': 'header label - always visible', 'kultur_AA_MODE': 'header label - visible with data', });
lyr_Kultureinrichtungen_u_kirche_3.set('fieldLabels', {'fid': 'hidden field', 'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'tourism': 'hidden field', 'ref': 'hidden field', 'operator': 'hidden field', 'description': 'no label', 'contact:facebook': 'no label', 'checkpoint:type': 'no label', 'checkpoint': 'no label', 'toilets:wheelchair': 'no label', 'museum': 'no label', 'contact:website': 'no label', 'contact:phone': 'no label', 'contact:email': 'no label', 'width': 'no label', 'entrance': 'no label', 'comment': 'no label', 'service_times': 'no label', 'check_date': 'no label', 'ref:isil': 'no label', 'opening_hours': 'no label', 'email': 'no label', 'building': 'no label', 'designation': 'no label', 'natural': 'no label', 'height': 'no label', 'wikidata': 'no label', 'website': 'no label', 'religion': 'no label', 'phone': 'no label', 'denomination': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:country': 'no label', 'addr:city': 'no label', 'wikimedia_commons': 'no label', 'ref:lda': 'no label', 'man_made': 'no label', 'lda:criteria': 'no label', 'image': 'no label', 'heritage:operator': 'no label', 'heritage': 'no label', 'wheelchair': 'no label', 'name': 'no label', });
lyr_Kultureinrichtungen_u_kirche_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});