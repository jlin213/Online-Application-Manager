import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export const MainLayout = ({header, content}) => (
	<main className="w-100 h-100 bg">
			{header}
			{content}
    </main>
);