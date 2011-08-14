(function() {
  var template_back_button, template_page, template_stack, template_table_header, template_table_row;
  template_stack = "<div class=\"stack\" id=\"{{Id}}\"></div>";
  template_page = "<div class=\"page\">\n	<div class=\"header\">\n		<div class=\"page_title\">\n			<div style=\"table-layout: auto;\">\n				<div class=\"header_left\"></div>\n				<div class=\"header_title\" onclick=\"javascript:location.reload()\" style=\"display: table-cell; width: 180px; text-align: center;\"><h2>{{Title}}</h2></div>\n				<div class=\"header_right\"></div>\n			</div>\n		</div>\n	</div>\n	<div class=\"wrapper\">\n		<div id=\"{{Id}}\" class=\"content scrollable vertical\">\n		</div>\n	</div>\n</div>";
  template_table_header = "<div class=\"header_row\"><h3>{{Title}}</h3></div>	";
  template_table_row = "<div class=\"row{{#Class}} {{Class}}{{/Class}}\">\n	<div class=\"row_cell\">\n		<h3>{{Title}}</h3>\n		{{#Subtitle}}\n		<div>{{Subtitle}}</div>\n		{{/Subtitle}}\n		{{#Detail}}\n		<div {{#Class}}class=\"{{Class}}\"{{/Class}}{{^Class}}style=\"color: #999;\"{{/Class}}>{{Detail}}</div>\n		{{/Detail}}\n	</div>\n	<div class=\"row_arrow_container\">\n		<div class=\"row_arrow\"></div>\n	</div>\n</div>";
  template_back_button = "<div id=\"back_{{Id}}\" class=\"back\">back</div>";
  ich.addTemplate('stack', template_stack);
  ich.addTemplate('page', template_page);
  ich.addTemplate('table_header', template_table_header);
  ich.addTemplate('table_row', template_table_row);
  ich.addTemplate('back_button', template_back_button);
}).call(this);
