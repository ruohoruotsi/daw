"use strict";

ui.timeline = {
	init: function() {
		var firstClick,
			el = document.querySelector( "#timeline" );

		el.onmousedown = function( e ) {
			var now = Date.now();

			if ( now - firstClick < 250 ) {
				gs.loop.stop();
				gs.loop.timeA( ui.grid.getWhen( e.pageX ) );
				ui.timelineLoop.clickTime( "b" );
			}
			firstClick = now;
		};

		el.onmouseup = function( e ) {
			if ( !ui.timelineLoop.dragging ) {
				gs.currentTime( ui.grid.getWhen( e.pageX ) );
			}
		};
	},
	update: function() {
		var leftEm = ui.trackLinesLeft / ui.gridEm,
			widthEm = ui.trackLinesWidth / ui.gridEm;

		ui.timelineBeats.fill( Math.ceil( -leftEm + widthEm ) );
		ui.dom.timelineBeats   .style.marginLeft = leftEm += "em";
		ui.dom.currentTimeArrow.style.marginLeft = leftEm;
		ui.dom.timelineLoop    .style.marginLeft = leftEm;
	}
};
