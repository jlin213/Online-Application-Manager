import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export const MainLayout = ({header, jobselector}) => (
	<main className="w-100 h-100">
			{header}
			{jobselector}
    </main>
);