# TEMPLATES
##########################################################################################

template_stack = """
	<div class="stack" id="{{Id}}"></div>
"""

template_page = """
	<div class="page">
		<div class="header">
			<div class="page_title">
				<div style="table-layout: auto;">
					<div class="header_left"></div>
					<div class="header_title" onclick="javascript:location.reload()"><h2>{{Title}}</h2></div>
					<div class="header_right"></div>
				</div>
			</div>
		</div>
		<div class="wrapper">
			<div id="{{Id}}" class="content scrollable vertical">
			</div>
		</div>
	</div>
"""

template_table_header = """
	<div class="header_row"><h3>{{Title}}</h3></div>	
"""

template_table_row = """
	<div class="row{{#Class}} {{Class}}{{/Class}}">
		<div class="row_cell">
			<h3>{{Title}}</h3>
			{{#Subtitle}}
			<div>{{Subtitle}}</div>
			{{/Subtitle}}
			{{#Detail}}
			<div {{#Class}}class="{{Class}}"{{/Class}}{{^Class}}style="color: #999;"{{/Class}}>{{Detail}}</div>
			{{/Detail}}
		</div>
		<div class="row_arrow_container">
			<div class="row_arrow"></div>
		</div>
	</div>
"""
template_back_button = """
	<div id="back_{{Id}}" class="back">back</div>
"""

ich.addTemplate 'stack', template_stack
ich.addTemplate 'page', template_page
ich.addTemplate 'table_header', template_table_header
ich.addTemplate 'table_row', template_table_row
ich.addTemplate 'back_button', template_back_button