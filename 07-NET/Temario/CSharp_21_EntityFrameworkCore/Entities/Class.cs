﻿using System;
using System.Collections.Generic;

namespace CSharp_21_EntityFrameworkCore.Entities
{
    public class Class
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public List<Student> Students { get; set; }        
    }
}
